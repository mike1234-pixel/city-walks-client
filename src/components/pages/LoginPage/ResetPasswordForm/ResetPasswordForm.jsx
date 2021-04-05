import { useContext } from 'react'
import { LoginContext } from '../../../../context/LoginContext'
import { MDBInput, MDBBtn, MDBIcon, MDBContainer } from "mdbreact"
import UserPortalNav from "../UserPortalNav"
import './ResetPasswordForm.css'

const ResetPasswordForm = () => {

      const {
        resetPasswordEmail,
        resetPasswordOldPassword,
        resetPasswordNewPassword,
        resetPasswordConfirmNewPassword,
        handleChangeResetPassword,
        handleSubmitResetPassword
    } = useContext(LoginContext)

    return (
    <div>
    <UserPortalNav/>
    <MDBContainer className="min-page-height">
        <div className="reset-password-header-container">
          <h2 className="reset-password-header">Reset Password</h2>
          <p>Reset your account password by submitting your old password and the password you want to replace it with.</p>
        </div>
          <form onSubmit={handleSubmitResetPassword} className="reset-password-form display-form">
              <MDBInput type="email" name="reset-email" id="reset-email" value={resetPasswordEmail} label="email" onChange={handleChangeResetPassword} required/>
              <MDBInput type="password" name="old-password" id="old-password" value={resetPasswordOldPassword} label="old password" onChange={handleChangeResetPassword} minLength="8" required/>
              <MDBInput type="password" name="new-password" id="new-password" value={resetPasswordNewPassword} label="new password" onChange={handleChangeResetPassword} minLength="8" required/>
              <MDBInput type="password" name="confirm-new-password" id="confirm-new-password" value={resetPasswordConfirmNewPassword} label="confirm new password" onChange={handleChangeResetPassword} minLength="8" required/>
              <MDBBtn outline color="elegant" type="submit">
                  Login <MDBIcon icon="sign-in-alt" />
            </MDBBtn>
          </form>
        </MDBContainer>
    </div>
    )
}

export default ResetPasswordForm