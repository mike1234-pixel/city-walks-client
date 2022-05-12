import React, { ReactNode, useEffect, useState } from "react"
import toTitleCase from "../../../functions/toTitleCase"
import { MDBInput, MDBBtn, MDBIcon, MDBCard, MDBCardTitle, MDBCardText, MDBContainer } from "mdbreact"
import axios, { AxiosError, AxiosResponse } from "axios"
import qs from "qs"
import marked from "marked"
import SelectedComment from "../../../types/PostRequests/SelectedComment"
import LoadingBar from "../../LoadingBar/LoadingBar"
import RootState from "../../../types/State/Root/State"
import SightT from "../../../types/Sights/Sight"
import Comment from "../../../types/Sights/Comment"
import { connect } from 'react-redux'
import CommentToSubmit from "../../../types/PostRequests/CommentToSubmit"
import './Sight.scss'

interface Props {
  history: any;
  sights: Array<SightT>;
  loggedIn: boolean;
  userFirstName: string;
  userId: string;
}

const Sight: React.FC<Props> = (props: Props) => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const { sights, loggedIn, userFirstName, userId } = props

  const blogTitle: string = toTitleCase(props.history.location.pathname.replace("/sights/", "").replace(/-/g, " "))

  const [comment, setComment] = useState<string>("")

  const handleChange: (event: React.ChangeEvent<any>) => void = (event) => {
    setComment(event.target.value)
  }

  const handleSubmit: (event: React.FormEvent) => void = (event) => {
    event.preventDefault()

    let payload: CommentToSubmit = {
      currentBlogTitle: blogTitle,
      comment: comment,
      userFirstName: userFirstName,
      userId: userId
    };

    axios
      .post("https://city-walks.herokuapp.com/add-blog-comment", qs.stringify(payload))
      .then((res: AxiosResponse) => {
        if (res.data === "comment submitted") {
          console.log("comment submitted")
        } else {
          console.log("comment not submitted")
        }
      }).catch((err: AxiosResponse) => {
        console.log(err)
      });

    alert("Comment Submitted")
    setComment("")
    window.location.reload()
  }

  const handleDeleteComment: (commentId: string) => void = (commentId) => {

    let payload: SelectedComment = {
      currentBlogTitle: blogTitle,
      commentId: commentId,
    };

    axios
      .delete("https://city-walks.herokuapp.com/delete-blog-comment", { data: payload })
      .then((res: AxiosResponse) => {

        alert("comment deleted.")
        window.location.reload()

      }).catch((err: AxiosError) => {
        console.log(err)
      });
  }

  let post: string | ReactNode = <LoadingBar />

  if (sights.length) {

    let selectedBlogPost: SightT | Array<SightT> | undefined = sights.filter((post: SightT) => post.title === blogTitle)
    selectedBlogPost = selectedBlogPost[0]

    const createMarkup: (markup: string) => ({ __html: string }) = (markup) => {
      return { __html: marked(markup, { breaks: true }) }
    }

    if (selectedBlogPost === undefined) {
      post = "sight not found"
    } else {
      post =
        <div className="blog-post-container">
          <div>
            <h1 className="page-heading">{selectedBlogPost.title}</h1>
            <h2 className="blog-subtitle page-subheading">{selectedBlogPost.subtitle}</h2>
          </div>
          <img className="blog-post-img" src={selectedBlogPost.img} />
          <div className="blog-post-content" dangerouslySetInnerHTML={createMarkup(selectedBlogPost.content)}></div>
          <p>{selectedBlogPost.submittedOn.replace('T', ' ').substring(0, 19)}</p>
          {selectedBlogPost?.comments?.map((comment: Comment) => {
            return (
              <MDBCard className="blog-post-comment-card" key={comment._id}>
                <MDBCardTitle>{comment.userFirstName} commented:</MDBCardTitle>
                <MDBCardText>{comment.comment}</MDBCardText>
                <MDBCardText>{comment.submittedOn.replace('T', ' ').substring(0, 19)}</MDBCardText>
                {userId === comment.userId && <MDBBtn className="blog-post-comment-card-btn" onClick={() => handleDeleteComment(comment._id)}>Delete Comment</MDBBtn>}
              </MDBCard>
            )
          })}
        </div>
    }
  }

  if (sights) {
    return (
      <MDBContainer>
        <div>
          <div>{post}</div>
          {loggedIn &&
            <form onSubmit={handleSubmit} className="add-blog-comment-form">
              <MDBInput type="textarea" rows="5" name="comment" id="comment" value={comment} label="comment" onChange={handleChange} required />
              <MDBBtn outline color="elegant" type="submit">
                Add Comment <MDBIcon icon="plus" />
              </MDBBtn>
            </form>
          }
        </div>
      </MDBContainer>
    )
  } else {
    return (
      <LoadingBar />
    )
  }
}

const mapStateToProps: (state: RootState) => void = (state) => ({
  sights: state.sightsState.sights,
  loggedIn: state.loginState.loggedIn,
  userFirstName: state.loginState.userFirstName,
  userId: state.loginState.userId
});

export default connect(mapStateToProps, null)(Sight);

