import React from 'react'
import { MDBInput, MDBBtn, MDBIcon, MDBContainer } from "mdbreact"
import UserPortalNav from "../UserPortalNav"
import axios, { AxiosError, AxiosResponse } from "axios"
import qs from "qs"
import { connect } from 'react-redux'
import RootState from '../../../../types/State/Root/State'
import Account from '../../../../types/PostRequests/Account'
import { Action, bindActionCreators, Dispatch } from 'redux'
import { setForgotPasswordEmail } from '../../../../actions/actions'
import './ForgotPasswordForm.scss'

interface Props {
  forgotPasswordEmail: string;
  setForgotPasswordEmail: (forgotPasswordEmail: string) => Action;
}

const ForgotPasswordForm: React.FC<Props> = (props: Props) => {

  const { forgotPasswordEmail, setForgotPasswordEmail } = props

  const handleChangeForgotPassword: (event: React.ChangeEvent<any>) => void = (event) => {
    switch (event.target.name) {
      case "forgot-password-email":
        setForgotPasswordEmail(event.target.value)
        break;
    }
  }

  const handleSubmitForgotPassword: (event: React.FormEvent) => void = (event) => {
    console.log("handle submit forgot password")
    event.preventDefault()

    const payload: Account = {
      email: forgotPasswordEmail,
    };

    axios
      .post("https://city-walks.herokuapp.com/forgot-password", qs.stringify(payload))
      .then((res: AxiosResponse) => {

        alert("We have sent you an email. Please click the click in your email to reset your password")
        setForgotPasswordEmail("")
        window.scrollTo(0, 0)

      }).catch((err: AxiosError) => {
        console.log(err)
      })
  }

  return (
    <div key="user-forgot-password">
      <UserPortalNav loggedIn={false} />
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

const mapStateToProps: (state: RootState) => void = (state) => ({
  forgotPasswordEmail: state.loginState.forgotPasswordEmail,
});

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    dispatch,
    ...bindActionCreators({ setForgotPasswordEmail }, dispatch),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ForgotPasswordForm);