import State from '../types/State/Login/State'

interface Action {
    type: string;
    firstName?: string;
    lastName?: string;
    userId?: string;
    registrationEmail?: string;
    registrationPassword?: string;
    loginEmail?: string;
    loginPassword?: string;
    loggedIn?: false,
    userFirstName?: string;
    userLastName?: string;
    verificationEmail?: string;
    resetPasswordEmail?: string;
    resetPasswordOldPassword?: string;
    resetPasswordNewPassword?: string;
    resetPasswordConfirmNewPassword?: string;
    forgotPasswordEmail?: string;
    activationMessageEmphasis?: string;
    boolValue?: boolean;
}

const INITIAL_STATE: State = {
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
};

const loginReducer = (state: State = INITIAL_STATE, action: Action) => {
    switch (action.type) {
        case 'SET_FIRST_NAME':
            return { ...state, firstName: action.firstName };
        case 'SET_LAST_NAME':
            return { ...state, lastName: action.lastName };
        case 'SET_USER_ID':
            return { ...state, userId: action.userId };
        case 'SET_REGISTRATION_EMAIL':
            return { ...state, registrationEmail: action.registrationEmail };
        case 'SET_REGISTRATION_PASSWORD':
            return { ...state, registrationPassword: action.registrationPassword };
        case 'SET_LOGIN_EMAIL':
            return { ...state, loginEmail: action.loginEmail };
        case 'SET_LOGIN_PASSWORD':
            return { ...state, loginPassword: action.loginPassword };
        case 'SET_LOGGED_IN':
            return { ...state, loggedIn: action.boolValue };
        case 'SET_USER_FIRST_NAME':
            return { ...state, userFirstName: action.userFirstName };
        case 'SET_USER_LAST_NAME':
            return { ...state, userLastName: action.userLastName };
        case 'SET_VERIFICATION_EMAIL':
            return { ...state, verificationEmail: action.verificationEmail };
        case 'SET_RESET_PASSWORD_EMAIL':
            return { ...state, resetPasswordEmail: action.resetPasswordEmail };
        case 'SET_RESET_PASSWORD_OLD_PASSWORD':
            return { ...state, resetPasswordOldPassword: action.resetPasswordOldPassword };
        case 'SET_RESET_PASSWORD_NEW_PASSWORD':
            return { ...state, resetPasswordNewPassword: action.resetPasswordNewPassword };
        case 'SET_RESET_PASSWORD_CONFIRM_NEW_PASSWORD':
            return { ...state, resetPasswordConfirmNewPassword: action.resetPasswordConfirmNewPassword };
        case 'SET_FORGOT_PASSWORD_EMAIL':
            return { ...state, forgotPasswordEmail: action.forgotPasswordEmail };
        case 'SET_ACTIVATION_MESSAGE_EMPHASIS':
            return { ...state, activationMessageEmphasis: action.activationMessageEmphasis };
        default: return state;
    }
}

export default loginReducer;