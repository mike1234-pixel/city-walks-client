import React from 'react'
import { useHistory } from "react-router-dom"
import { MDBInput, MDBBtn, MDBIcon, MDBContainer } from "mdbreact"
import UserPortalNav from "../UserPortalNav"
import axios, { AxiosError, AxiosResponse } from "axios"
import qs from "qs"
import { connect } from 'react-redux'
import { Action, bindActionCreators, Dispatch } from 'redux'
import { setResetPasswordEmail, setResetPasswordOldPassword, setResetPasswordNewPassword, setResetPasswordConfirmNewPassword } from '../../../../actions/actions'

import RootState from '../../../../types/State/Root/State'
import './ResetPasswordForm.scss'

interface Props {
  resetPasswordEmail: string;
  resetPasswordOldPassword: string;
  resetPasswordNewPassword: string;
  resetPasswordConfirmNewPassword: string;
  setResetPasswordEmail: (resetPasswordEmail: string) => Action;
  setResetPasswordOldPassword: (resetPasswordOldPassword: string) => Action;
  setResetPasswordNewPassword: (resetPasswordNewPassword: string) => Action;
  setResetPasswordConfirmNewPassword: (resetPasswordConfirmNewPassword: string) => Action;
}

const ResetPasswordForm: React.FC<Props> = (props: Props) => {

  const pushSlug: Function = useHistory().push

  const { resetPasswordEmail, resetPasswordOldPassword, resetPasswordNewPassword, resetPasswordConfirmNewPassword, setResetPasswordEmail, setResetPasswordOldPassword, setResetPasswordNewPassword, setResetPasswordConfirmNewPassword } = props

  const handleChangeResetPassword = (event: React.ChangeEvent<any>) => {
    switch (event.target.name) {
      case "reset-email":
        setResetPasswordEmail(event.target.value)
        break;
      case "old-password":
        setResetPasswordOldPassword(event.target.value)
        break;
      case "new-password":
        setResetPasswordNewPassword(event.target.value)
        break;
      case "confirm-new-password":
        setResetPasswordConfirmNewPassword(event.target.value)
        break;
    }
  }

  const handleSubmitResetPassword = (event: React.FormEvent<any>) => {
    console.log("handle submit reset password")
    event.preventDefault()

    const payload = {
      email: resetPasswordEmail,
      oldPassword: resetPasswordOldPassword,
      newPassword: resetPasswordNewPassword,
    };

    if (resetPasswordNewPassword === resetPasswordConfirmNewPassword) {
      axios
        .post("https://city-walks.herokuapp.com/reset-password-with-old-password", qs.stringify(payload))
        .then((res: AxiosResponse) => {
          if (res.data === "user not found") {
            alert("We could not find your account. Please try again.")
          } else if (res.data === "old password does not match password in the database") {
            alert("The password you entered does not match the account. Please try again or use the Forgot Password option.")
          } else if (res.data === "password successfully updated") {
            alert("Password reset. You can now login.")
            setResetPasswordEmail("")
            setResetPasswordOldPassword("")
            setResetPasswordNewPassword("")
            setResetPasswordConfirmNewPassword("")
            pushSlug("/forum/login");
            window.scrollTo(0, 0)
          }
        }).catch((err: AxiosError) => {
          console.log(err)
        });
    } else {
      alert("Passwords don't match. Please try again.")
    }

  }

  return (
    <div>
      <UserPortalNav loggedIn={false} />
      <MDBContainer className="page">
        <div className="reset-password-header-container">
          <h2 className="reset-password-header">Reset Password</h2>
          <p>Reset your account password by submitting your old password and the password you want to replace it with.</p>
        </div>
        <form onSubmit={handleSubmitResetPassword} className="reset-password-form display-form">
          <MDBInput type="email" name="reset-email" id="reset-email" value={resetPasswordEmail} label="email" onChange={handleChangeResetPassword} required />
          <MDBInput type="password" name="old-password" id="old-password" value={resetPasswordOldPassword} label="old password" onChange={handleChangeResetPassword} minLength="8" required />
          <MDBInput type="password" name="new-password" id="new-password" value={resetPasswordNewPassword} label="new password" onChange={handleChangeResetPassword} minLength="8" required />
          <MDBInput type="password" name="confirm-new-password" id="confirm-new-password" value={resetPasswordConfirmNewPassword} label="confirm new password" onChange={handleChangeResetPassword} minLength="8" required />
          <MDBBtn outline color="elegant" type="submit">
            Login <MDBIcon icon="sign-in-alt" />
          </MDBBtn>
        </form>
      </MDBContainer>
    </div>
  )
}

const mapStateToProps: (state: RootState) => void = (state) => ({
  resetPasswordEmail: state.loginState.resetPasswordEmail,
  resetPasswordOldPassword: state.loginState.resetPasswordOldPassword,
  resetPasswordNewPassword: state.loginState.resetPasswordNewPassword,
  resetPasswordConfirmNewPassword: state.loginState.resetPasswordConfirmNewPassword
});

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    dispatch,
    ...bindActionCreators({ setResetPasswordEmail, setResetPasswordOldPassword, setResetPasswordNewPassword, setResetPasswordConfirmNewPassword }, dispatch),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ResetPasswordForm);

