import { useContext } from "react"
import { LoginContext } from "../../context/LoginContext"
import { MDBBtn, MDBContainer } from "mdbreact"
import { Link } from "react-router-dom"
import "./PopUp.scss"

const PopUp = () => {

    const { handlePopup } = useContext(LoginContext)

    return (
        <MDBContainer>
            <div className="popup-container-cookies">
                <div className="popup-cookies">
                    <p>To make City Walks work, we log user data. By using City Walks, you agree to our <Link to="/privacy" className="popup-link">Privacy Policy</Link>, including cookie policy.</p>
                    <p className="popup-google-note">This site is protected by reCAPTCHA and the <a  target="_blank" href="https://policies.google.com/privacy" className="popup-link">Google Privacy Policy</a> and <a target="_blank" href="https://policies.google.com/terms" className="popup-link">Terms of Service</a> apply.</p>
                    <MDBBtn onClick={handlePopup} className="popup-accept-btn">Accept</MDBBtn>
                </div>
            </div>
        </MDBContainer>
    )
}

export default PopUp