import { ReactNode, useState } from "react"
import React from 'react'
import { MDBInput, MDBBtn, MDBCard, MDBCardTitle, MDBCardText } from "mdbreact"
import axios, { AxiosError, AxiosResponse } from "axios"
import qs from "qs"
import { connect } from 'react-redux'
import Reply from "../../../../../../types/Boards/Reply"
import ReplyToSubmit from '../../../../../../types/PostRequests/Reply'
import SelectedReply from "../../../../../../types/PostRequests/SelectedReply"
import SelectedThread from "../../../../../../types/PostRequests/SelectedThread"
import './ThreadBox.scss'
import GlobalState from "../../../../../../types/State/Global/State"

interface Props {
  currentBoardName: string; 
  threadId: string; 
  userFirstName: string; 
  title: string;
  content: string; 
  replies: Array<Reply>; 
  submittedOn: string; 
  userId: string; 
  loggedIn: string; 
  currentUserFirstName: string; 
  currentUserId: string;
}

const ThreadBox: React.FC<any> = (props: Props) => {

    const { currentBoardName, threadId, userFirstName, title, content, replies, submittedOn, userId, loggedIn, userFirstName: currentUserFirstName, userId: currentUserId } = props

    const [showAllReplies, setShowAllReplies] = useState<boolean>(false)
    const [reply, setReply] = useState<string>("")

    const handleChange: (event: React.ChangeEvent<any>) => void = (event) => {
        setReply(event.target.value)
    }

    const handleSubmit: (event: React.FormEvent) => void = (event) => {
        event.preventDefault()
        setReply("")

        let payload: ReplyToSubmit = {
            currentBoardName: currentBoardName,
            threadId: threadId,
            userId: currentUserId,
            userFirstName: currentUserFirstName,
            reply: reply, // send current user id
          };

        axios
        .post("https://city-walks.herokuapp.com/add-reply", qs.stringify(payload))
        .then((res: AxiosResponse) => {
          alert("reply submitted.")
          window.location.reload()
        }).catch((err: AxiosError) => {
          console.log(err)
        });
    }

    const handleDeleteReply: (replyId: string) => void = (replyId) => {

        let payload: SelectedReply = {
            currentBoardName: currentBoardName,
            threadId: threadId,
            replyId: replyId
        };

        axios
        .delete("https://city-walks.herokuapp.com/delete-reply", { data: payload })
        .then((res: AxiosResponse) => {
          alert("reply deleted.")
          window.location.reload()
        }).catch((err: AxiosError) => {
          console.log(err)
        });
    }

    const handleDeleteThread: (threadId: string) => void = (threadId) => {

      let payload: SelectedThread = {
        currentBoardName: currentBoardName,
        threadId: threadId,
      };

      axios
      .delete("https://city-walks.herokuapp.com/delete-thread", { data: payload })
      .then((res: AxiosResponse) => {

          alert("thread deleted.")
          window.location.reload()
        
      }).catch((err: AxiosError) => {
        console.log(err)
      });
    }

    const replyComponents: Array<ReactNode> = replies.map((reply: Reply, index: number) => {

        return (
        <div className="reply" key={index}>
            <p>{reply.userFirstName} replied!</p>
            <p>{reply.reply}</p>
            <p>{reply.submittedOn.replace('T', ' ').substring(0, 19)}</p>
            {reply.userId === currentUserId && <MDBBtn outline onClick={() => handleDeleteReply(reply._id)}>Delete</MDBBtn>}
        </div>
        )
    })

    let displayReplies: Array<ReactNode>;
    if (showAllReplies) {
        displayReplies = replyComponents;
    } else {
        // if end is greater than array length, slice uses the array length as the last index
        displayReplies = replyComponents.slice(0,3)
    }

    return (
        <MDBCard className="card-body" id="thread-box">
          <div className="thread-container">
            <MDBCardTitle className="thread-box-title">{title}</MDBCardTitle>
                <MDBCardText className="thread-box-content">
                    {content}
                </MDBCardText>
                <p>Posted by {userFirstName} on {submittedOn.replace('T', ' ').substring(0, 19)}</p>
                  {userId === currentUserId && <MDBBtn outline color="danger" onClick={() => handleDeleteThread(threadId)}>Delete Thread</MDBBtn>}
            </div>
            <div className="replies-h3-container">
                <h3>Replies...</h3>
            </div>
                <div className="replies-container">{displayReplies}</div>
                <MDBBtn outline color="default" className="show-all-replies-btn" onClick={() => setShowAllReplies(!showAllReplies)}>{showAllReplies ? "hide replies" : "show all replies"}</MDBBtn>
                <form onSubmit={handleSubmit}>
                    {loggedIn && <div><MDBInput type="textarea" rows="5" name="reply" id="reply" label="reply" value={reply} onChange={handleChange}/><MDBBtn outline type="submit">Submit</MDBBtn></div>  }
                </form>
        </MDBCard>
    )
}

const mapStateToProps = (state: GlobalState) => ({
  loggedIn: state.loginState.loggedIn,
  userFirstName: state.loginState.userFirstName,
  userId: state.loginState.userId,
});

export default connect(mapStateToProps)(ThreadBox);


// // setter
// localStorage.setItem('myData', data);
 
// // getter
// localStorage.getItem('myData');
 
// // remove
// localStorage.removeItem('myData');
 
// // remove all
// localStorage.clear();