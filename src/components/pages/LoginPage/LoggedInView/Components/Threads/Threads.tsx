import React, { ReactNode, useEffect, useState } from "react"
import ThreadBox from "../ThreadBox/ThreadBox"
import toTitleCase from "../../../../../../functions/toTitleCase"
import { MDBBtn, MDBInput, MDBContainer } from "mdbreact"
import axios, { AxiosError, AxiosResponse } from "axios"
import qs from "qs"
import { connect } from 'react-redux'
import Board from '../../../../../../types/Boards/Board'
import GlobalState from "../../../../../../types/State/Global/State"
import "./Threads.scss"
import Thread from "../../../../../../types/PostRequests/Thread"
import ThreadT from '../../../../../../types/Boards/Thread'

interface Props {
    history: any;
    boards: Array<Board>;
    loggedIn: boolean;
    userId: string;
    userFirstName: string;
}

const Threads: React.FC<Props> = (props: Props) => {

    const { boards, loggedIn, userId, userFirstName } = props;

    const boardName: string = toTitleCase(props.history.location.pathname.replace("/forum/", "").replace(/-/g, " "))

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    let threads: string | ReactNode = "loading";

    if (boards.length) {

        const selectedBoard = boards.filter((board: Board) => board.name === boardName)[0]

        if (selectedBoard === undefined) {
            threads = "thread not found"
        } else {
            threads = selectedBoard.threads.map((thread: ThreadT, index: number) => {

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
                        key={index} loggedIn={false} currentUserFirstName={""} currentUserId={""} />
                )
            }).reverse()
        }
    }

    const [threadName, setThreadName] = useState<string>("")
    const [threadContent, setThreadContent] = useState<string>("")

    const handleChange: (event: React.ChangeEvent<any>) => void = (event) => {

        switch (event.target.name) {
            case "add-thread-name":
                setThreadName(event.target.value)
                break;
            case "add-thread-content":
                setThreadContent(event.target.value)
                break;
        }

    }

    const handleSubmit: (event: React.FormEvent) => void = (event) => {
        event.preventDefault()

        let payload: Thread = {
            currentBoardName: boardName,
            userId: userId,
            userFirstName: userFirstName,
            title: threadName,
            content: threadContent
        };

        axios
            .post("https://city-walks.herokuapp.com/add-thread", qs.stringify(payload))
            .then((res: AxiosResponse) => {

                alert("thread submitted.")
                setThreadName("")
                setThreadContent("")
                window.location.reload()

            }).catch((err: AxiosError) => {
                console.log(err)
            });
    }

    const addThread: ReactNode =
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

const mapStateToProps = (state: GlobalState) => ({
    boards: state.boardsState.boards,
    loggedIn: state.loginState.loggedIn,
    userId: state.loginState.userId,
    userFirstName: state.loginState.userFirstName
});

export default connect(mapStateToProps, null)(Threads);