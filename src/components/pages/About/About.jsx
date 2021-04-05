import { useContext, useEffect } from "react"
import PopUp from "../../PopUp/PopUp"
import { Link } from "react-router-dom"
import { LoginContext } from "../../../context/LoginContext"
import { MDBIcon, MDBContainer } from "mdbreact"
import './About.css'

const About = () => {

    const { popupVisible } = useContext(LoginContext)

    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);

    return (
        <MDBContainer>
            <div>
                {popupVisible && <PopUp/>}
                <div className="page-heading-container min-page-height">
                    <h1 className="page-heading">About</h1>
                    <div className="about-page-container">
                        <p>City Walks is a website that publishes illustrated guided walks.</p>
                        <p>Each <Link to="/walks">Walk</Link> provides a guided tour of a district within a city and points out local attractions, accompanied by a hand drawn map of the route.</p>
                        <p>Some visitor atractions are described in more detail on the <Link to="/sights">Sights</Link> page, and users can share their own recommendations on the <Link to="/boards">Forum</Link> page</p>
                        <p>It is recommended setting aside a full day for each walk to allow yourself the time to fully explore the local attractions.</p>
                        <p>The walks utilise public transport for their start and end points.</p>
                        <p className="walking-icon"><MDBIcon icon="walking" /></p>
                    </div>
                </div>
            </div>
        </MDBContainer>
    )
}

export default About