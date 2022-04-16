import { MDBBtn, MDBContainer } from "mdbreact"
import { Link } from "react-router-dom"
import { connect } from 'react-redux'
import "./PrivacyPopUp.scss"

const PrivacyPopUp = (props) => {

    const { setPrivacyPopupVisible } = props

    const handlePrivacyPopup = () => {
        setPrivacyPopupVisible(false)
        localStorage.setItem("popupVisible", false)
    }

    return (
        <MDBContainer>
            <div className="popup-container-cookies">
                <div className="popup-cookies">
                    <p>To make City Walks work, we log user data. By using City Walks, you agree to our <Link to="/privacy" className="popup-link">Privacy Policy</Link>, including cookie policy.</p>
                    <p className="popup-google-note">This site is protected by reCAPTCHA and the <a target="_blank" href="https://policies.google.com/privacy" className="popup-link">Google Privacy Policy</a> and <a target="_blank" href="https://policies.google.com/terms" className="popup-link">Terms of Service</a> apply.</p>
                    <MDBBtn onClick={handlePrivacyPopup} className="popup-accept-btn">Accept</MDBBtn>
                </div>
            </div>
        </MDBContainer>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        setPrivacyPopupVisible: (boolValue) => dispatch({ type: 'SET_POPUP_VISIBLE', boolValue }),
    }
}

export default connect(null, mapDispatchToProps)(PrivacyPopUp);