import { useContext, useEffect, useState } from "react"
import { LoginContext } from "../../../../../../context/LoginContext"
import ThreadBox from "../ThreadBox/ThreadBox"
import toTitleCase from "../../../../../../functions/toTitleCase"
import { MDBBtn, MDBInput, MDBContainer } from "mdbreact"
import axios from "axios"
import qs from "qs"
import { connect } from 'react-redux'
import "./Threads.scss"

const Threads = (props) => {

    const { boards } = props;
    const { loggedIn, userId, userFirstName } = useContext(LoginContext)

    const boardName = toTitleCase(props.history.location.pathname.replace("/forum/", "").replace(/-/g, " "))

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    let threads = "loading";

    if (boards.length) {

        const selectedBoard = boards.filter((board) => board.name === boardName)[0]

        if (selectedBoard === undefined) {
            threads = "thread not found"
        } else {
            threads = selectedBoard.threads.map((thread, index) => {
                return (
                    <ThreadBox
                        currentBoardName={boardName}
                        threadId={thread._id}
                        userFirstName={thread.userFirstName}
                        title={thread.title}
                        content={thread.content}
                        replies={thread.replies}
                        submittedOn={thread.submittedOn}
                        userId={thread.userId}
                        key={index}
                    />
                )
            }).reverse()
        }
    }

    const [threadName, setThreadName] = useState("")
    const [threadContent, setThreadContent] = useState("")

    const handleChange = (event) => {

        switch (event.target.name) {
            case "add-thread-name":
                setThreadName(event.target.value)
                break;
            case "add-thread-content":
                setThreadContent(event.target.value)
                break;
        }

    }

    const handleSubmit = (event) => {
        event.preventDefault()

        let payload = {
            currentBoardName: boardName,
            userId: userId,
            userFirstName: userFirstName,
            title: threadName,
            content: threadContent
        };

        axios
            .post("https://city-walks.herokuapp.com/add-thread", qs.stringify(payload))
            .then((res, err) => {
                if (err) {
                    console.log(err);
                } else {
                    alert("thread submitted.")
                    setThreadName("")
                    setThreadContent("")
                    window.location.reload()
                }
            });
    }

    const addThread =
        <div className="add-thread-form-container">
            <h2 className="add-thread-form-heading">Post a new discussion thread on this board:</h2>
            <form className="add-thread-form" onSubmit={handleSubmit}>
                <MDBInput type="text" name="add-thread-name" id="add-thread-name" onChange={handleChange} value={threadName} label="thread name" />
                <MDBInput type="textarea" rows="6" name="add-thread-content" id="add-thread-content" onChange={handleChange} value={threadContent} label="thread content" />
                <MDBBtn outline color="elegant" type="submit">Add Thread</MDBBtn>
            </form>
        </div>

    return (
        <MDBContainer>
            <div className="threads-container">
                <h1 className="page-heading">{boardName}</h1>
                {loggedIn && addThread}
                <div>{threads}</div>
            </div>
        </MDBContainer>
    )
}

const mapStateToProps = state => ({
    boards: state.boardsState.boards,
});

export default connect(mapStateToProps)(Threads);