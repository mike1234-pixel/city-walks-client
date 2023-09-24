import React from "react"
import { MDBInput, MDBBtn, MDBIcon, MDBContainer } from "mdbreact"
import UserPortalNav from "../UserPortalNav"
import { Link } from "react-router-dom"
import axios, { AxiosError, AxiosResponse } from "axios"
import qs from "qs"
import { connect } from "react-redux"
import { bindActionCreators, Dispatch } from "redux"
import {
  setFirstName,
  setLastName,
  setRegistrationEmail,
  setRegistrationPassword,
  setUserFirstName,
  setUserLastName,
  setActivationMessageEmphasis,
} from "../../../../actions/actions"
import RootState from "../../../../types/State/Root/State"
import RegistrationCredentials from "../../../../types/PostRequests/RegistrationCredentials"
import * as Actions from "../../../../types/Actions"
import "./RegistrationForm.scss"

interface Props {
  firstName: string
  lastName: string
  registrationEmail: string
  registrationPassword: string
  activationMessageEmphasis: string
  setFirstName: (firstName: string) => Actions.SetFirstName
  setLastName: (lastName: string) => Actions.SetLastName
  setRegistrationEmail: (
    registrationEmail: string
  ) => Actions.SetRegistrationEmail
  setRegistrationPassword: (
    registrationPassword: string
  ) => Actions.SetRegistrationPassword
  setUserFirstName: (userFirstName: string) => Actions.SetUserFirstName
  setUserLastName: (userLastName: string) => Actions.SetUserLastName
  setActivationMessageEmphasis: (
    activationMessageEmphasis: string
  ) => Actions.SetActivationMessageEmphasis
}

const RegistrationForm: React.FC<Props> = (props: Props) => {
  const {
    firstName,
    lastName,
    registrationEmail,
    registrationPassword,
    activationMessageEmphasis,
    setFirstName,
    setLastName,
    setRegistrationEmail,
    setRegistrationPassword,
    setUserFirstName,
    setUserLastName,
    setActivationMessageEmphasis,
  } = props

  const handleChangeRegistration: (event: React.ChangeEvent<any>) => void = (
    event
  ) => {
    switch (event.target.name) {
      case "registration-fname":
        setFirstName(event.target.value)
        break
      case "registration-lname":
        setLastName(event.target.value)
        break
      case "registration-email":
        setRegistrationEmail(event.target.value)
        break
      case "registration-password":
        setRegistrationPassword(event.target.value)
        break
    }
  }

  const handleSubmitRegistration: (event: React.FormEvent) => void = (
    event
  ) => {
    event.preventDefault()

    const payload: RegistrationCredentials = {
      fname: firstName,
      lname: lastName,
      email: registrationEmail,
      password: registrationPassword,
    }

    axios
      .post(
        "https://city-walks-production.up.railway.app/register-user",
        qs.stringify(payload)
      )
      .then((res: AxiosResponse) => {
        if (res.data === "An account with this email already exists.") {
          alert("An account with this email already exists.")
        } else if (
          res.data ===
          "We have sent you an email. Please verify your account by clicking the link in the mail."
        ) {
          alert(
            "We have sent you an email. Please verify your account by clicking the link in the email. (This code expires after 10 minutes)"
          )
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
      })
      .catch((err: AxiosError) => {
        console.log(err)
      })
  }

  return (
    <div key='user-registration'>
      <UserPortalNav loggedIn={false} />
      <MDBContainer className='page'>
        <div className='registration-header-container'>
          <h2 className='registration-header'>Register</h2>
          <p>Create a new account.</p>
          <div className={activationMessageEmphasis}>
            <p>
              You will receive an email containing an activation link to verify
              your email and activate your account.
            </p>
            <p>The activation link expires after 10 minutes.</p>
            <p>
              If the activation link expires, you can{" "}
              <Link id='request-activation-link' to='/forum/verify'>
                request a fresh activation link.
              </Link>
            </p>
          </div>
        </div>
        <form
          onSubmit={handleSubmitRegistration}
          className='user-registration-form display-form'
          key='user-registration-form'
        >
          <MDBInput
            key='input-1'
            type='text'
            name='registration-fname'
            id='registration-fname'
            value={firstName}
            label='first Name'
            onChange={handleChangeRegistration}
            pattern='^[A-Za-z\-]+$'
            required
          />
          <MDBInput
            key='input-2'
            type='text'
            name='registration-lname'
            id='registration-lname'
            value={lastName}
            label='last Name'
            onChange={handleChangeRegistration}
            pattern='^[A-Za-z\-]+$'
            required
          />
          <MDBInput
            key='input-3'
            type='email'
            name='registration-email'
            id='registration-email'
            value={registrationEmail}
            label='email'
            onChange={handleChangeRegistration}
            required
          />
          <MDBInput
            key='input-4'
            type='password'
            name='registration-password'
            id='registration-password'
            value={registrationPassword}
            label='password (minimum 8 characters)'
            onChange={handleChangeRegistration}
            minLength='8'
            required
          />
          <MDBBtn outline color='elegant' type='submit'>
            Register <MDBIcon icon='sign-in-alt' />
          </MDBBtn>
        </form>
      </MDBContainer>
    </div>
  )
}

const mapStateToProps: (state: RootState) => void = (state) => ({
  firstName: state.loginState.firstName,
  lastName: state.loginState.lastName,
  registrationEmail: state.loginState.registrationEmail,
  activationMessageEmphasis: state.loginState.activationMessageEmphasis,
})

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    dispatch,
    ...bindActionCreators(
      {
        setFirstName,
        setLastName,
        setRegistrationEmail,
        setRegistrationPassword,
        setUserFirstName,
        setUserLastName,
        setActivationMessageEmphasis,
      },
      dispatch
    ),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RegistrationForm)
