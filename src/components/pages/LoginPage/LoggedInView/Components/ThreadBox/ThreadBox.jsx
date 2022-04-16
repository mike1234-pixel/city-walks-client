import { useState } from "react"
import { MDBInput, MDBBtn, MDBCard, MDBCardTitle, MDBCardText } from "mdbreact"
import axios from "axios"
import qs from "qs"
import { connect } from 'react-redux'
import './ThreadBox.scss'

const ThreadBox = (props) => {

    const { currentBoardName, threadId, userFirstName, title, content, replies, submittedOn, userId, loggedIn, userFirstName: currentUserFirstName, userId: currentUserId } = props

    const [showAllReplies, setShowAllReplies] = useState(false)
    const [reply, setReply] = useState("")

    const handleChange = (event) => {
        setReply(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        setReply("")

        let payload = {
            currentBoardName: currentBoardName,
            threadId: threadId,
            userId: currentUserId,
            userFirstName: currentUserFirstName,
            reply: reply, // send current user id
          };

        axios
        .post("https://city-walks.herokuapp.com/add-reply", qs.stringify(payload))
        .then((res, err) => {
          if (err) {
            console.log(err);
          } else {
              alert("reply submitted.")
              window.location.reload()
          }
        });
    }

    const handleDeleteReply = (replyId) => {
        let payload = {
            currentBoardName: currentBoardName,
            threadId: threadId,
            replyId: replyId
          };

        axios
        .delete("https://city-walks.herokuapp.com/delete-reply", { data: payload })
        .then((res, err) => {
          if (err) {
            console.log(err);
          }  else {
            alert("reply deleted.")
            window.location.reload()
          }
        });
    }

    const handleDeleteThread = (threadId) => {
      console.log(threadId)

      let payload = {
        currentBoardName: currentBoardName,
        threadId: threadId,
      };

      axios
      .delete("https://city-walks.herokuapp.com/delete-thread", { data: payload })
      .then((res, err) => {
        if (err) {
          console.log(err);
        }  else {
          alert("thread deleted.")
          window.location.reload()
        }
      });
    }

    const replyComponents = replies.map((reply, index) => {
        return (
        <div className="reply" key={index}>
            <p>{reply.userFirstName} replied!</p>
            <p>{reply.reply}</p>
            <p>{reply.submittedOn.replace('T', ' ').substring(0, 19)}</p>
            {reply.userId === currentUserId && <MDBBtn outline color="black" onClick={() => handleDeleteReply(reply._id)}>Delete</MDBBtn>}
        </div>
        )
    })

    let displayReplies;
    if (showAllReplies) {
        displayReplies = replyComponents;
        console.log(replyComponents)
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
                    {loggedIn && <div><MDBInput type="textarea" rows="5" name="reply" id="reply" label="reply" value={reply} onChange={handleChange}/><MDBBtn outline color="white" type="submit">Submit</MDBBtn></div>  }
                </form>
        </MDBCard>
    )
}

const mapStateToProps = state => ({
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