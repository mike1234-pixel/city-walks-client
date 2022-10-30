import State from "../types/State/Login/State";
import * as actions from "../constants/constants";
import { Actions, PayloadAction } from "@reduxjs/toolkit";

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

type RegisterFirstNameAction = PayloadAction<
  string,
  typeof actions.SET_FIRST_NAME
>;

type RegisterLastNameAction = PayloadAction<
  string,
  typeof actions.SET_LAST_NAME
>;

type RegisterEmailAction = PayloadAction<
  string,
  typeof actions.SET_REGISTRATION_EMAIL
>;

type RegisterPasswordAction = PayloadAction<
  string,
  typeof actions.SET_REGISTRATION_PASSWORD
>;

type ActivationMessageEmphasisAction = PayloadAction<
  string,
  typeof actions.SET_ACTIVATION_MESSAGE_EMPHASIS
>;

type LoggedInAction = PayloadAction<boolean, typeof actions.SET_LOGGED_IN>;

type UserIdAction = PayloadAction<string | null, typeof actions.SET_USER_ID>;

type LoginFirstNameAction = PayloadAction<
  string | null,
  typeof actions.SET_USER_FIRST_NAME
>;

type LoginLastNameAction = PayloadAction<
  string | null,
  typeof actions.SET_USER_LAST_NAME
>;

type LoginEmailAction = PayloadAction<string, typeof actions.SET_LOGIN_EMAIL>;

type LoginPasswordAction = PayloadAction<
  string,
  typeof actions.SET_LOGIN_PASSWORD
>;

type ForgotPasswordAction = PayloadAction<
  string,
  typeof actions.SET_FORGOT_PASSWORD_EMAIL
>;

type ResetPasswordEmailAction = PayloadAction<
  string,
  typeof actions.SET_RESET_PASSWORD_EMAIL
>;

type ResetPasswordOldPasswordAction = PayloadAction<
  string,
  typeof actions.SET_RESET_PASSWORD_OLD_PASSWORD
>;

type ResetPasswordNewPasswordAction = PayloadAction<
  string,
  typeof actions.SET_RESET_PASSWORD_NEW_PASSWORD
>;

type ResetPasswordConfirmNewPasswordAction = PayloadAction<
  string,
  typeof actions.SET_RESET_PASSWORD_CONFIRM_NEW_PASSWORD
>;

type VerificationEmailAction = PayloadAction<
  string,
  typeof actions.SET_VERIFICATION_EMAIL
>;

type LoginAction =
  | RegisterFirstNameAction
  | RegisterLastNameAction
  | RegisterEmailAction
  | RegisterPasswordAction
  | ActivationMessageEmphasisAction
  | LoggedInAction
  | UserIdAction
  | LoginFirstNameAction
  | LoginLastNameAction
  | LoginEmailAction
  | LoginPasswordAction
  | ForgotPasswordAction
  | ResetPasswordEmailAction
  | ResetPasswordOldPasswordAction
  | ResetPasswordNewPasswordAction
  | ResetPasswordConfirmNewPasswordAction
  | VerificationEmailAction;

const loginReducer = (state: State = initialState, action: LoginAction) => {
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
