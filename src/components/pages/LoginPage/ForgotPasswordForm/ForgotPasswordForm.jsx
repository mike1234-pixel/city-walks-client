import { useContext } from 'react'
import { LoginContext } from '../../../../context/LoginContext'
import { MDBInput, MDBBtn, MDBIcon, MDBContainer } from "mdbreact"
import UserPortalNav from "../UserPortalNav"
import './ForgotPasswordForm.scss'

const ForgotPasswordForm = () => {

    const {
        forgotPasswordEmail, 
        handleChangeForgotPassword, 
        handleSubmitForgotPassword
    } = useContext(LoginContext)

    return (
        <div key="user-forgot-password">
        <UserPortalNav/>
        <MDBContainer className="min-page-height">
        <div className="forgot-password-header-container">
          <h2 className="forgot-password-header">Forgot Your Password?</h2>
          <p>Please submit your email.</p>
          <p>We will send you an email to confirm it's you. Click the link in the email to reset your password.</p>
        </div>
          <form onSubmit={handleSubmitForgotPassword} className="forgot-password-form display-form">
              <MDBInput key="input-5" type="email" name="forgot-password-email" id="forgot-password-email" value={forgotPasswordEmail} label="email" onChange={handleChangeForgotPassword} required/>
              <MDBBtn outline color="elegant" type="submit">
                  Reset Password <MDBIcon far icon="paper-plane" />
            </MDBBtn>
          </form>
          </MDBContainer>
      </div>
    )
}
export default ForgotPasswordForm