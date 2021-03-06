import { useContext } from 'react'
import { LoginContext } from '../../../../context/LoginContext'
import { MDBInput, MDBBtn, MDBIcon, MDBContainer } from "mdbreact"
import UserPortalNav from "../UserPortalNav"
import './LoginForm.scss'

const LoginForm = () => {

      const {
        loginEmail, 
        loginPassword, 
        handleChangeLogin, 
        handleSubmitLogin} = useContext(LoginContext)

    return (
        <div key="user-login" className="min-page-height">
        <UserPortalNav/>
        <MDBContainer>
          <div className="login-header-container">
            <h2 className="login-form-header">Login</h2>
            <p>Login to Your Account.</p>
          </div>
            <form onSubmit={handleSubmitLogin} className="user-login-form display-form">
                <MDBInput key="input-5" type="email" name="login-email" id="login-email" value={loginEmail} label="email" onChange={handleChangeLogin} required/>
                <MDBInput key="input-6" type="password" name="login-password" id="login-password" value={loginPassword} label="password" onChange={handleChangeLogin} minLength="8" required/>
                <MDBBtn outline color="elegant" type="submit">
                    Login <MDBIcon icon="sign-in-alt" />
              </MDBBtn>
            </form>
            </MDBContainer>
        </div>
    )
}

export default LoginForm