import { useEffect, useContext, useState } from "react"
import { LoginContext } from "../../../context/LoginContext"
import toTitleCase from "../../../functions/toTitleCase"
import { MDBInput, MDBBtn, MDBIcon, MDBCard, MDBCardTitle, MDBCardText, MDBContainer } from "mdbreact"
import axios from "axios"
import qs from "qs"
import marked from "marked"
import { motion } from "framer-motion"
import pageTransition from "../../../constants/pageTransition"
import './Sight.scss'
import { connect } from 'react-redux'

const Sight = (props) => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const { sights } = props

  //console.log("PROPS=" + JSON.stringify(props))

  const blogTitle = toTitleCase(props.history.location.pathname.replace("/sights/", "").replace(/-/g, " "))

  const { loggedIn, userFirstName, userId, popupVisible } = useContext(LoginContext)

  const [comment, setComment] = useState("")

  const handleChange = (event) => {
    setComment(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    let payload = {
      currentBlogTitle: blogTitle,
      comment: comment,
      userFirstName: userFirstName,
      userId: userId
    };

    axios
      .post("https://city-walks.herokuapp.com/add-blog-comment", qs.stringify(payload))
      .then((res, err) => {
        if (err) {
          console.log(err);
        } else if (res.data === "comment submitted") {
          console.log("comment submitted")
        } else {
          console.log("comment not submitted")
        }
      });

    alert("Comment Submitted")
    setComment("")
    window.location.reload()
  }

  const handleDeleteComment = (commentId) => {

    let payload = {
      currentBlogTitle: blogTitle,
      commentId: commentId,
    };

    axios
      .delete("https://city-walks.herokuapp.com/delete-blog-comment", { data: payload })
      .then((res, err) => {
        if (err) {
          console.log(err);
        } else {
          alert("comment deleted.")
          window.location.reload()
        }
      });
  }

  let post = "loading"

  if (sights) {

    let selectedBlogPost = sights.filter((post) => post.title === blogTitle)
    selectedBlogPost = selectedBlogPost[0]

    const createMarkup = (markup) => {
      return { __html: marked(markup, { breaks: true }) }
    }

    if (selectedBlogPost === undefined) {
      post = "walk not found"
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
          {selectedBlogPost.comments.map((comment) => {
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
      <motion.div
        style={{ position: "relative" }}
        exit={pageTransition.out}
        animate={pageTransition.in}
        initial={pageTransition.initial}
        transition={{ duration: 0.5 }}
        className="motion-div"
      >
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
      </motion.div>
    )
  } else {
    return (
      <p>loading...</p>
    )
  }
}

const mapStateToProps = state => ({
  sights: state.sightsState.sights,
});

export default connect(mapStateToProps)(Sight);

