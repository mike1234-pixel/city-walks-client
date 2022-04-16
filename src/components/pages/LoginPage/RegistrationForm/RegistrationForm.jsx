import { MDBInput, MDBBtn, MDBIcon, MDBContainer } from "mdbreact"
import UserPortalNav from "../UserPortalNav"
import { Link } from "react-router-dom"
import axios from "axios"
import qs from "qs"
import { connect } from 'react-redux'
import './RegistrationForm.scss'

const RegistrationForm = (props) => {

  const { firstName, lastName, registrationEmail, registrationPassword, activationMessageEmphasis, setFirstName, setLastName, setRegistrationEmail, setRegistrationPassword, setUserFirstName, setUserLastName, setActivationMessageEmphasis } = props

  const handleChangeRegistration = (event) => {
    switch (event.target.name) {
      case "registration-fname":
        setFirstName(event.target.value)
        break;
      case "registration-lname":
        setLastName(event.target.value)
        break;
      case "registration-email":
        setRegistrationEmail(event.target.value)
        break;
      case "registration-password":
        setRegistrationPassword(event.target.value)
        break;
    }
  }

  const handleSubmitRegistration = (event) => {
    console.log("handle submit triggered")
    event.preventDefault()

    const payload = {
      fname: firstName,
      lname: lastName,
      email: registrationEmail,
      password: registrationPassword,
    };

    axios
      .post("https://city-walks.herokuapp.com/register-user", qs.stringify(payload))
      .then((res, err) => {
        if (err) {
          console.log(err);
        } else if (res.data === "An account with this email already exists.") {
          alert("An account with this email already exists.")
        } else if (res.data === "We have sent you an email. Please verify your account by clicking the link in the mail.") {
          alert("We have sent you an email. Please verify your account by clicking the link in the email. (This code expires after 10 minutes)")
          setFirstName("")
          setLastName("")
          setRegistrationEmail("")
          setRegistrationPassword("")
          setUserFirstName(res.data.fname)
          setUserLastName(res.data.lname)
          setActivationMessageEmphasis("emphasis")
          window.scrollTo(0, 0)
        } else {
          alert("Registration Complete")
        }
      });
  }


  return (
    <div key="user-registration">
      <UserPortalNav />
      <MDBContainer className="min-page-height">
        <div className="registration-header-container">
          <h2 className="registration-header">Register</h2>
          <p>Create a new account.</p>
          <div className={activationMessageEmphasis}>
            <p>You will receive an email containing an activation link to verify your email and activate your account.</p>
            <p>The activation link expires after 10 minutes.</p>
            <p>If the activation link expires, you can <Link id="request-activation-link" to="/forum/verify">request a fresh activation link.</Link></p>
          </div>
        </div>
        <form onSubmit={handleSubmitRegistration} className="user-registration-form display-form" key="user-registration-form">
          <MDBInput key="input-1" type="text" name="registration-fname" id="registration-fname" value={firstName} label="first Name" onChange={handleChangeRegistration} pattern="^[A-Za-z\-]+$" required />
          <MDBInput key="input-2" type="text" name="registration-lname" id="registration-lname" value={lastName} label="last Name" onChange={handleChangeRegistration} pattern="^[A-Za-z\-]+$" required />
          <MDBInput key="input-3" type="email" name="registration-email" id="registration-email" value={registrationEmail} label="email" onChange={handleChangeRegistration} required />
          <MDBInput key="input-4" type="password" name="registration-password" id="registration-password" value={registrationPassword} label="password (minimum 8 characters)" onChange={handleChangeRegistration} minLength="8" required />
          <MDBBtn outline color="elegant" type="submit">
            Register <MDBIcon icon="sign-in-alt" />
          </MDBBtn>
        </form>
      </MDBContainer>
    </div>
  )
}

const mapStateToProps = state => ({
  firstName: state.loginState.firstName,
  lastName: state.loginState.lastName,
  registrationEmail: state.loginState.registrationEmail,
  activationMessageEmphasis: state.loginState.activationMessageEmphasis
});

const mapDispatchToProps = (dispatch) => {
  return {
    setFirstName: (firstName) => dispatch({ type: 'SET_FIRST_NAME', firstName }),
    setLastName: (lastName) => dispatch({ type: 'SET_NAME_NAME', lastName }),
    setRegistrationEmail: (registrationEmail) => dispatch({ type: 'SET_REGISTRATION_EMAIL', registrationEmail }),
    setRegistrationPassword: (registrationPassword) => dispatch({ type: 'SET_REGISTRATION_PASSWORD', registrationPassword }),
    setUserFirstName: (userFirstName) => dispatch({ type: 'SET_USER_FIRST_NAME', userFirstName }),
    setUserLastName: (userLastName) => dispatch({ type: 'SET_USER_LAST_NAME', userLastName }),
    setActivationMessageEmphasis: (activationMessageEmphasis) => dispatch({ type: 'SET_ACTIVATION_MESSAGE_EMPHASIS', activationMessageEmphasis }),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RegistrationForm);