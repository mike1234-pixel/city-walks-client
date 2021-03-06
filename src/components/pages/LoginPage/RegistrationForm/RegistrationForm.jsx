import { useContext, useState } from 'react'
import { LoginContext } from '../../../../context/LoginContext'
import { MDBInput, MDBBtn, MDBIcon, MDBContainer } from "mdbreact"
import UserPortalNav from "../UserPortalNav"
import { Link } from "react-router-dom"
import './RegistrationForm.scss'

const RegistrationForm = () => {

  const {
        firstName, 
        lastName, 
        registrationEmail, 
        registrationPassword, 
        handleChangeRegistration,
        handleSubmitRegistration,
        activationMessageEmphasis,
    } = useContext(LoginContext)

    return (
    <div key="user-registration">
    <UserPortalNav/>
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
              <MDBInput key="input-1" type="text" name="registration-fname" id="registration-fname" value={firstName} label="first Name" onChange={handleChangeRegistration} pattern="^[A-Za-z\-]+$" required/>
              <MDBInput key="input-2" type="text" name="registration-lname" id="registration-lname" value={lastName} label="last Name" onChange={handleChangeRegistration} pattern="^[A-Za-z\-]+$" required/>
              <MDBInput key="input-3" type="email" name="registration-email" id="registration-email" value={registrationEmail} label="email" onChange={handleChangeRegistration} required/>
              <MDBInput key="input-4" type="password" name="registration-password" id="registration-password" value={registrationPassword} label="password (minimum 8 characters)" onChange={handleChangeRegistration} minLength="8" required/>
              <MDBBtn outline color="elegant" type="submit">
                  Register <MDBIcon icon="sign-in-alt" />
            </MDBBtn>
          </form>
        </MDBContainer>
    </div>
    )
}

export default RegistrationForm