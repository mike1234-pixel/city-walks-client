import { MDBInput, MDBBtn, MDBIcon, MDBContainer } from "mdbreact"
import UserPortalNav from "../UserPortalNav"
import axios from "axios"
import qs from "qs"
import { connect } from 'react-redux'
import './ForgotPasswordForm.scss'

const ForgotPasswordForm = (props) => {

  const { forgotPasswordEmail, setForgotPasswordEmail } = props

  const handleChangeForgotPassword = (event) => {
    switch (event.target.name) {
      case "forgot-password-email":
        setForgotPasswordEmail(event.target.value)
        break;
    }
  }

  const handleSubmitForgotPassword = (event) => {
    console.log("handle submit forgot password")
    event.preventDefault()

    const payload = {
      email: forgotPasswordEmail,
    };

    axios
      .post("https://city-walks.herokuapp.com/forgot-password", qs.stringify(payload))
      .then((res, err) => {
        if (err) {
          console.log(err);
        } else {
          alert("We have sent you an email. Please click the click in your email to reset your password")
          setForgotPasswordEmail("")
          window.scrollTo(0, 0)
        }
      })
  }

  return (
    <div key="user-forgot-password">
      <UserPortalNav />
      <MDBContainer className="min-page-height">
        <div className="forgot-password-header-container">
          <h2 className="forgot-password-header">Forgot Your Password?</h2>
          <p>Please submit your email.</p>
          <p>We will send you an email to confirm it's you. Click the link in the email to reset your password.</p>
        </div>
        <form onSubmit={handleSubmitForgotPassword} className="forgot-password-form display-form">
          <MDBInput key="input-5" type="email" name="forgot-password-email" id="forgot-password-email" value={forgotPasswordEmail} label="email" onChange={handleChangeForgotPassword} required />
          <MDBBtn outline color="elegant" type="submit">
            Reset Password <MDBIcon far icon="paper-plane" />
          </MDBBtn>
        </form>
      </MDBContainer>
    </div>
  )
}

const mapStateToProps = state => ({
  forgotPasswordEmail: state.loginState.forgotPasswordEmail,
});

const mapDispatchToProps = (dispatch) => {
  return {
    setForgotPasswordEmail: (forgotPasswordEmail) => dispatch({ type: 'SET_FORGOT_PASSWORD_EMAIL', forgotPasswordEmail }),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ForgotPasswordForm);