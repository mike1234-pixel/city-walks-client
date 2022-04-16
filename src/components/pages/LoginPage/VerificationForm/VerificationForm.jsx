import { MDBInput, MDBBtn, MDBIcon, MDBContainer } from "mdbreact"
import UserPortalNav from "../UserPortalNav"
import axios from "axios"
import qs from "qs"
import { connect } from 'react-redux'
import './VerificationForm.scss'

const VerificationForm = (props) => {

  const { verificationEmail, setVerificationEmail } = props

  const handleChangeVerification = (event) => {
    switch (event.target.name) {
      case "verification-email":
        setVerificationEmail(event.target.value)
        break;
    }
  }

  const handleSubmitVerification = (event) => {
    console.log("handle submit verification")
    event.preventDefault()

    const payload = {
      email: verificationEmail,
    };

    axios
      .post("https://city-walks.herokuapp.com/reverify-user", qs.stringify(payload))
      .then((res, err) => {
        if (err) {
          console.log(err);
        } else {
          alert("Verification email sent. Check your inbox.")
          setVerificationEmail("")
          window.scrollTo(0, 0)
        }
      })
  }


  return (
    <div key="user-verification">
      <UserPortalNav />
      <MDBContainer className="min-page-height">
        <div className="verification-header-container">
          <h2 className="verification-header">Activate Your Account</h2>
          <p>Submit your email address to resend the verification email to activate your account.</p>
          <p>You must activate your account within 10 minutes of receiving the email.</p>
          <p>If the email link expires then submit your email address again to receive a fresh activation link.</p>
        </div>
        <form onSubmit={handleSubmitVerification} className="verification-form display-form">
          <MDBInput key="input-5" type="email" name="verification-email" id="verification-email" value={verificationEmail} label="email" onChange={handleChangeVerification} required />
          <MDBBtn outline color="elegant" type="submit">
            Resend Email <MDBIcon far icon="paper-plane" />
          </MDBBtn>
        </form>
      </MDBContainer>
    </div>
  )
}

const mapStateToProps = state => ({
  verificationEmail: state.loginState.verificationEmail,
});

const mapDispatchToProps = (dispatch) => {
  return {
    setVerificationEmail: (verificationEmail) => dispatch({ type: 'SET_VERIFICATION_EMAIL', verificationEmail }),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(VerificationForm);