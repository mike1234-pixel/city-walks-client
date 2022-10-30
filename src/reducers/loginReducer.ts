import State from "../types/State/Login/State";
import * as Actions from "../types/Actions";

const initialState: State = {
  firstName: "",
  lastName: "",
  userId: "",
  registrationEmail: "",
  registrationPassword: "",
  loginEmail: "",
  loginPassword: "",
  loggedIn: false,
  userFirstName: "",
  userLastName: "",
  verificationEmail: "",
  resetPasswordEmail: "",
  resetPasswordOldPassword: "",
  resetPasswordNewPassword: "",
  resetPasswordConfirmNewPassword: "",
  forgotPasswordEmail: "",
  activationMessageEmphasis: "no-emphasis",
};

type LoginActions =
  | Actions.SetFirstName
  | Actions.SetLastName
  | Actions.SetRegistrationEmail
  | Actions.SetRegistrationPassword
  | Actions.SetActivationMessageEmphasis
  | Actions.SetLoggedIn
  | Actions.SetUserId
  | Actions.SetUserFirstName
  | Actions.SetUserLastName
  | Actions.SetLoginEmail
  | Actions.SetLoginPassword
  | Actions.SetForgotPasswordEmail
  | Actions.SetForgotPasswordEmail
  | Actions.SetResetPasswordEmail
  | Actions.SetResetPasswordEmail
  | Actions.SetResetPasswordOldPassword
  | Actions.SetResetPasswordNewPassword
  | Actions.SetResetPasswordConfirmNewPassword
  | Actions.SetVerificationEmail;

const loginReducer = (state: State = initialState, action: LoginActions) => {
  switch (action.type) {
    case "SET_FIRST_NAME":
      return { ...state, firstName: action.payload };
    case "SET_LAST_NAME":
      return { ...state, lastName: action.payload };
    case "SET_REGISTRATION_EMAIL":
      return { ...state, registrationEmail: action.payload };
    case "SET_USER_ID":
      return { ...state, userId: action.payload };
    case "SET_REGISTRATION_PASSWORD":
      return { ...state, registrationPassword: action.payload };
    case "SET_LOGIN_EMAIL":
      return { ...state, loginEmail: action.payload };
    case "SET_LOGIN_PASSWORD":
      return { ...state, loginPassword: action.payload };
    case "SET_LOGGED_IN":
      return { ...state, loggedIn: action.payload };
    case "SET_USER_FIRST_NAME":
      return { ...state, userFirstName: action.payload };
    case "SET_USER_LAST_NAME":
      return { ...state, userLastName: action.payload };
    case "SET_VERIFICATION_EMAIL":
      return { ...state, verificationEmail: action.payload };
    case "SET_RESET_PASSWORD_EMAIL":
      return { ...state, resetPasswordEmail: action.payload };
    case "SET_RESET_PASSWORD_OLD_PASSWORD":
      return { ...state, resetPasswordOldPassword: action.payload };
    case "SET_RESET_PASSWORD_NEW_PASSWORD":
      return { ...state, resetPasswordNewPassword: action.payload };
    case "SET_RESET_PASSWORD_CONFIRM_NEW_PASSWORD":
      return { ...state, resetPasswordConfirmNewPassword: action.payload };
    case "SET_FORGOT_PASSWORD_EMAIL":
      return { ...state, forgotPasswordEmail: action.payload };
    case "SET_ACTIVATION_MESSAGE_EMPHASIS":
      return { ...state, activationMessageEmphasis: action.payload };
    default:
      return state;
  }
};

export default loginReducer;
