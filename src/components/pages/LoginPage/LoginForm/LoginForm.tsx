import React from 'react'
import { useHistory } from "react-router-dom"
import { MDBInput, MDBBtn, MDBIcon, MDBContainer } from "mdbreact"
import UserPortalNav from "../UserPortalNav"
import axios, { AxiosError, AxiosResponse } from "axios"
import qs from "qs"
import { connect } from 'react-redux'
import GlobalState from '../../../../types/State/Global/State'
import Credentials from '../../../../types/PostRequests/Credentials'
import { Dispatch } from 'redux'
import './LoginForm.scss'

interface Props {
  loginEmail: string;
  loginPassword: string;
  setLoginEmail: Function;
  setLoginPassword: Function;
  setLoggedIn: Function;
  setUserId: Function;
  setUserFirstName: Function;
  setUserLastName: Function;
}

const LoginForm: React.FC<Props> = (props: Props) => {

  const { loginEmail, loginPassword, setLoginEmail, setLoginPassword, setLoggedIn, setUserId, setUserFirstName, setUserLastName } = props

  const pushSlug: Function = useHistory().push

  const handleChangeLogin = (e: React.ChangeEvent<any>) => {
    switch (e.target.name) {
      case "login-email":
        setLoginEmail(e.target.value)
        break;
      case "login-password":
        setLoginPassword(e.target.value)
        break;
    }
  }

  const handleSubmitLogin = (e: React.FormEvent) => {
    console.log("handle submit login triggered")
    e.preventDefault()

    const payload: Credentials = {
      email: loginEmail,
      password: loginPassword
    };

    axios
      .post("https://city-walks.herokuapp.com/login-user", qs.stringify(payload))
      .then((res: AxiosResponse) => {
        if (res.data === "Your account exists but is not activated. Please click 'verify account' for email verification.") {
          alert("Your account exists but is not activated. Please click 'verify account' for email verification.")
        } else if (res.data === "unsuccessful login attempt") {
          alert("Unsuccessful Login Attempt. Please Try Again.")
        } else {
          alert("Login Complete")
          setLoggedIn(true)
          setLoginEmail("")
          setLoginPassword("")
          setUserId(res.data._id)
          setUserFirstName(res.data.fname)
          setUserLastName(res.data.lname)
          localStorage.setItem("loggedIn", 'true')
          localStorage.setItem("userId", res.data._id)
          localStorage.setItem("userFirstName", res.data.fname)
          pushSlug("/forum");
          window.scrollTo(0, 0)
        }
      }).catch((err: AxiosError) => {
        console.log(err)
      });
  }

  return (
    <div key="user-login" className="min-page-height">
      <UserPortalNav loggedIn={false} />
      <MDBContainer>
        <div className="login-header-container">
          <h2 className="login-form-header">Login</h2>
          <p>Login to Your Account.</p>
        </div>
        <form onSubmit={handleSubmitLogin} className="user-login-form display-form">
          <MDBInput key="input-5" type="email" name="login-email" id="login-email" value={loginEmail} label="email" onChange={handleChangeLogin} required />
          <MDBInput key="input-6" type="password" name="login-password" id="login-password" value={loginPassword} label="password" onChange={handleChangeLogin} minLength="8" required />
          <MDBBtn outline color="elegant" type="submit">
            Login <MDBIcon icon="sign-in-alt" />
          </MDBBtn>
        </form>
      </MDBContainer>
    </div>
  )
}

const mapStateToProps: (state: GlobalState) => void = (state) => ({
  loginEmail: state.loginState.loginEmail,
  loginPassword: state.loginState.loginPassword,
});

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    setLoginEmail: (loginEmail: string) => dispatch({ type: 'SET_LOGIN_EMAIL', loginEmail }),
    setLoginPassword: (loginPassword: string) => dispatch({ type: 'SET_LOGIN_PASSWORD', loginPassword }),
    setLoggedIn: (boolValue: boolean) => dispatch({ type: 'SET_LOGGED_IN', boolValue }),
    setUserId: (userId: string) => dispatch({ type: 'SET_USER_ID', userId }),
    setUserFirstName: (userFirstName: string) => dispatch({ type: 'SET_USER_ID', userFirstName }),
    setUserLastName: (userLastName: string) => dispatch({ type: 'SET_USER_ID', userLastName }),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);