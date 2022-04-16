import BoardBox from "../LoggedInView/Components/BoardBox/BoardBox"
import { useContext } from "react"
import { LoginContext } from "../../../../context/LoginContext"
import { MDBContainer } from "mdbreact"
import UserPortalNav from "../UserPortalNav"
import { motion } from "framer-motion"
import pageTransition from "../../../../constants/pageTransition"
import { connect } from 'react-redux'
import './Boards.scss'

const Boards = (props) => {

    const { boards } = props;

    const { userFirstName } = useContext(LoginContext)

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

const mapStateToProps = state => ({
    boards: state.boardsState.boards,
});

export default connect(mapStateToProps)(Boards);