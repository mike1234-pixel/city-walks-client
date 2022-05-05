import React from 'react'
import BoardBox from "./Components/BoardBox/BoardBox"
import { MDBContainer } from "mdbreact"
import UserPortalNav from "../UserPortalNav"
import { motion } from "framer-motion"
import pageTransition from "../../../../constants/pageTransition"
import { connect } from 'react-redux'
import Board from '../../../../types/Boards/Board'
import GlobalState from '../../../../types/State/Global/State'
import './Boards.scss'

interface Props {
    boards: Array<Board>;
    userFirstName: string;
}

const Boards: React.FC<any> = (props: Props) => {

    const { boards, userFirstName } = props;

    return (
        <motion.div
            style={{ position: "relative" }}
            // exit={pageTransition.out}
            animate={pageTransition.in}
            initial={pageTransition.initial}
            transition={pageTransition.duration}
            className="motion-div"
        >
            <div>
                <div className="page-heading-container">
                    <UserPortalNav />
                    <MDBContainer>
                        <h1 className="page-heading">Forum</h1>
                        <h2 className="login-heading">Welcome back {userFirstName}</h2>
                        <p>Here you can join in the discussion and put forward your own recomendations. Discussions are subdivided by category:</p>
                    </MDBContainer>
                </div>
                <MDBContainer>
                    {boards.length ?
                        <div className="boards-container">
                            {boards.map((board, index) => {
                                return (
                                    <BoardBox boardId={board._id} name={board.name} description={board.description} index={index} key={index} />
                                )
                            })}
                        </div>
                        :
                        <p>Loading...</p>
                    }
                </MDBContainer>
            </div>
        </motion.div>
    )
}

const mapStateToProps = (state: GlobalState) => ({
    boards: state.boardsState.boards,
    userFirstName: state.loginState.userFirstName
});

export default connect(mapStateToProps)(Boards);