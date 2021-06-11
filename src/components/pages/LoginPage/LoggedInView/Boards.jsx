import { useContext } from "react"
import { ForumContext } from "../../../../context/ForumContext"
import { LoginContext } from "../../../../context/LoginContext"
import { MDBContainer } from "mdbreact"
import PopUp from "../../../../components/PopUp/PopUp"
import UserPortalNav from "../UserPortalNav"
import { motion } from "framer-motion"
import pageTransition from "../../../../constants/pageTransition"
import './Boards.scss'

const Boards = () => {

    const { userFirstName } = useContext(LoginContext)
    const { loadingBoards, displayBoards } = useContext(ForumContext)

    const { popupVisible } = useContext(LoginContext)

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
                <UserPortalNav/>
                <MDBContainer>
                    <h1 className="page-heading">Forum</h1>
                    <h2 className="login-heading">Welcome back {userFirstName}</h2>
                    <p>Here you can join in the discussion and put forward your own recomendations. Discussions are subdivided by category:</p>
                </MDBContainer>
                </div>
                <MDBContainer>
                    {loadingBoards ? 
                    <p>Loading...</p> : 
                    <div className="boards-container">
                        {displayBoards}
                    </div>}
                </MDBContainer>
            </div>
        </motion.div>
    )
}


export default Boards

