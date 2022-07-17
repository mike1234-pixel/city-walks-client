import State from '../types/State/Login/State'

const initialState: State = {
    firstName: '',
    lastName: '',
    userId: '',
    registrationEmail: '',
    registrationPassword: '',
    loginEmail: '',
    loginPassword: '',
    loggedIn: false,
    userFirstName: '',
    userLastName: '',
    verificationEmail: '',
    resetPasswordEmail: '',
    resetPasswordOldPassword: '',
    resetPasswordNewPassword: '',
    resetPasswordConfirmNewPassword: '',
    forgotPasswordEmail: '',
    activationMessageEmphasis: 'no-emphasis'
}

export interface RegisterFirstNameAction {
    type: 'SET_FIRST_NAME',
    payload: string,
}

export interface RegisterLastNameAction {
    type: 'SET_LAST_NAME',
    payload: string,
}
export interface RegisterEmailAction {
    type: 'SET_REGISTRATION_EMAIL',
    payload: string,
}

export interface RegisterPasswordAction {
    type: 'SET_REGISTRATION_PASSWORD',
    payload: string,
}

export interface ActivationMessageEmphasisAction {
    type: 'SET_ACTIVATION_MESSAGE_EMPHASIS',
    payload: string,
}

export interface LoggedInAction {
    type: 'SET_LOGGED_IN',
    payload: boolean,
}

export interface UserIdAction {
    type: 'SET_USER_ID',
    payload: string | null,
}

export interface LoginFirstNameAction {
    type: 'SET_USER_FIRST_NAME',
    payload: string | null,
}

export interface LoginLastNameAction {
    type: 'SET_USER_LAST_NAME',
    payload: string | null,
}

export interface LoginEmailAction {
    type: 'SET_LOGIN_EMAIL',
    payload: string,
}

export interface LoginPasswordAction {
    type: 'SET_LOGIN_PASSWORD',
    payload: string,
}

export interface ForgotPasswordAction {
    type: 'SET_FORGOT_PASSWORD_EMAIL',
    payload: string,
}

export interface ResetPasswordEmailAction {
    type: 'SET_RESET_PASSWORD_EMAIL',
    payload: string,
}

export interface ResetPasswordOldPasswordAction {
    type: 'SET_RESET_PASSWORD_OLD_PASSWORD',
    payload: string,
}

export interface ResetPasswordNewPasswordAction {
    type: 'SET_RESET_PASSWORD_NEW_PASSWORD',
    payload: string,
}

export interface ResetPasswordConfirmNewPasswordAction {
    type: 'SET_RESET_PASSWORD_CONFIRM_NEW_PASSWORD',
    payload: string,
}

export interface VerificationEmailAction {
    type: 'SET_VERIFICATION_EMAIL',
    payload: string,
}

type LoginAction =
    RegisterFirstNameAction
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
    | VerificationEmailAction

const loginReducer = (state: State = initialState, action: LoginAction) => {
    switch (action.type) {
        case 'SET_FIRST_NAME':
            return { ...state, firstName: action.payload };
        case 'SET_LAST_NAME':
            return { ...state, lastName: action.payload };
        case 'SET_REGISTRATION_EMAIL':
            return { ...state, registrationEmail: action.payload };
        case 'SET_USER_ID':
            return { ...state, userId: action.payload };
        case 'SET_REGISTRATION_PASSWORD':
            return { ...state, registrationPassword: action.payload };
        case 'SET_LOGIN_EMAIL':
            return { ...state, loginEmail: action.payload };
        case 'SET_LOGIN_PASSWORD':
            return { ...state, loginPassword: action.payload };
        case 'SET_LOGGED_IN':
            return { ...state, loggedIn: action.payload };
        case 'SET_USER_FIRST_NAME':
            return { ...state, userFirstName: action.payload };
        case 'SET_USER_LAST_NAME':
            return { ...state, userLastName: action.payload };
        case 'SET_VERIFICATION_EMAIL':
            return { ...state, verificationEmail: action.payload };
        case 'SET_RESET_PASSWORD_EMAIL':
            return { ...state, resetPasswordEmail: action.payload };
        case 'SET_RESET_PASSWORD_OLD_PASSWORD':
            return { ...state, resetPasswordOldPassword: action.payload };
        case 'SET_RESET_PASSWORD_NEW_PASSWORD':
            return { ...state, resetPasswordNewPassword: action.payload };
        case 'SET_RESET_PASSWORD_CONFIRM_NEW_PASSWORD':
            return { ...state, resetPasswordConfirmNewPassword: action.payload };
        case 'SET_FORGOT_PASSWORD_EMAIL':
            return { ...state, forgotPasswordEmail: action.payload };
        case 'SET_ACTIVATION_MESSAGE_EMPHASIS':
            return { ...state, activationMessageEmphasis: action.payload };
        default: return state;
    }
}

export default loginReducer