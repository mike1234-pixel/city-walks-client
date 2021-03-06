import { createContext, useState } from "react"
import axios from "axios"
import { useHistory } from "react-router-dom"
import qs from "qs"

export const LoginContext = createContext();

export const LoginContextProvider = (props) => {
    const [popupVisible, setPopupVisible] = useState(false)

    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [userId, setUserId] = useState("")
    const [registrationEmail, setRegistrationEmail] = useState("")
    const [registrationPassword, setRegistrationPassword] = useState("")
  
    const [loginEmail, setLoginEmail] = useState("")
    const [loginPassword, setLoginPassword] = useState("")
  
    // save all of this in local storage
    const [loggedIn, setLoggedIn] = useState(false)
    const [userFirstName, setUserFirstName] = useState("")
    const [userLastName, setUserLastName] = useState("")
  
    const [verificationEmail, setVerificationEmail] = useState("")

    const [resetPasswordEmail, setResetPasswordEmail] = useState("")
    const [resetPasswordOldPassword, setResetPasswordOldPassword] = useState("")
    const [resetPasswordNewPassword, setResetPasswordNewPassword] = useState("")
    const [resetPasswordConfirmNewPassword, setResetPasswordConfirmNewPassword] = useState("")

    const [forgotPasswordEmail, setForgotPasswordEmail] = useState("")

    const [activationMessageEmphasis, setActivationMessageEmphasis] = useState("no-emphasis")

    const history = useHistory()

    const handlePopup = () => {
      setPopupVisible(false)
      localStorage.setItem("popupVisible", false)
    }

    const handleChangeRegistration = (event) => {
        switch(event.target.name) {
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
            // setLoggedIn(true)
          }
        });
    }
  
    const handleChangeLogin = (event) => {
      switch(event.target.name) {
          case "login-email":
            setLoginEmail(event.target.value)
            break;
          case "login-password":
            setLoginPassword(event.target.value)
            break;
        } 
  }
  
  const handleSubmitLogin = (event) => {
    console.log("handle submit login triggered")
      event.preventDefault()
  
      const payload = {
          email: loginEmail,
          password: loginPassword
        };
  
  axios
      .post("https://city-walks.herokuapp.com/login-user", qs.stringify(payload))
      .then((res, err) => {
        if (err) {
          console.log(err);
        } else if (res.data === "Your account exists but is not activated. Please click 'verify account' for email verification.") {
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
          localStorage.setItem("loggedIn", true)
          localStorage.setItem("userId", res.data._id)
          localStorage.setItem("userFirstName", res.data.fname)
          history.push("/forum");
          window.scrollTo(0, 0)
        }
      });
  }

  // resend verification email

  const handleChangeVerification = (event) => {
    switch(event.target.name) {
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

  // reset password

  const handleChangeResetPassword = (event) => {
    switch(event.target.name) {
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

const handleSubmitResetPassword = (event) => {
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
        .then((res, err) => {
          if (err) {
            console.log(err);
          } else if (res.data === "user not found") {
            alert("We could not find your account. Please try again.")
          } else if (res.data === "old password does not match password in the database") {
            alert("The password you entered does not match the account. Please try again or use the Forgot Password option.")
          } else if (res.data === "password successfully updated") {
            alert("Password reset. You can now login.")
            setResetPasswordEmail("")
            setResetPasswordOldPassword("")
            setResetPasswordNewPassword("")
            setResetPasswordConfirmNewPassword("")
            history.push("/forum/login");
            window.scrollTo(0, 0)
          }
        })
      } else {
        alert("Passwords don't match. Please try again.")
      }

}

  // forgot password

  const handleChangeForgotPassword = (event) => {
    switch(event.target.name) {
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
  
  const logOut = () => {
    localStorage.clear()
    localStorage.setItem("popupVisible", false)
    setLoggedIn(false)
    setUserId("")
    setUserFirstName("")
    setUserLastName("")
    alert("Logged out successfully.")
    history.push("/forum");
  }

    return (
        <LoginContext.Provider 
            value={{
              popupVisible,
              setPopupVisible,
              handlePopup,
               // logged in state 
               loggedIn,
               // registration state and functions
                firstName,
                lastName,
                registrationEmail,
                registrationPassword,
                handleChangeRegistration,
                handleSubmitRegistration,
                // login state and functions
                loginEmail,
                loginPassword,
                handleChangeLogin: handleChangeLogin,
                handleSubmitLogin: handleSubmitLogin,
                setLoggedIn,
                setUserFirstName,
                setUserId,
                activationMessageEmphasis,
                // logged in user data
                userFirstName,
                userId,
                userLastName,
                // resend verification email
                verificationEmail,
                handleChangeVerification,
                handleSubmitVerification,
                // reset password
                resetPasswordEmail,
                resetPasswordOldPassword,
                resetPasswordNewPassword,
                resetPasswordConfirmNewPassword,
                handleChangeResetPassword,
                handleSubmitResetPassword,
                // forgot password
                forgotPasswordEmail,
                handleChangeForgotPassword,
                handleSubmitForgotPassword,
                // logout function
                logOut
            }}
        >
            {props.children}
        </LoginContext.Provider>
    )
}

// // setter
// localStorage.setItem('myData', data);
 
// // getter
// localStorage.getItem('myData');
 
// // remove
// localStorage.removeItem('myData');
 
// // remove all
// localStorage.clear();

