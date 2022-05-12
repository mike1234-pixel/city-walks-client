import Sight from "../types/Sights/Sight"
import Walk from "../types/Walks/Walk"
import Cities from "../types/Cities/City"
import Board from "../types/Boards/Board"

// data

export const saveSights = (sights: Array<Sight>) => {
    return { type: 'SAVE_SIGHTS', sights }
}

export const saveWalks = (walks: Array<Walk>) => {
    return { type: 'SAVE_WALKS', walks }
}

export const saveCities = (cities: Array<Cities>) => {
    return { type: 'SAVE_CITIES', cities }
}

export const saveBoards = (boards: Array<Board>) => {
    return { type: 'SAVE_BOARDS', boards }
}

// registration

export const setFirstName = (firstName: string) => {
    return { type: 'SET_FIRST_NAME', firstName }
}

export const setLastName = (lastName: string) => {
    return { type: 'SET_NAME_NAME', lastName }
}

export const setRegistrationEmail = (registrationEmail: string) => {
    return { type: 'SET_REGISTRATION_EMAIL', registrationEmail }
}

export const setRegistrationPassword = (registrationPassword: string) => {
    return { type: 'SET_REGISTRATION_PASSWORD', registrationPassword }
}

export const setActivationMessageEmphasis = (activationMessageEmphasis: string) => {
    return { type: 'SET_ACTIVATION_MESSAGE_EMPHASIS', activationMessageEmphasis }
}

// login

export const setPrivacyPopupVisible = (boolValue: boolean) => {
    return { type: 'SET_POPUP_VISIBLE', boolValue }
}

export const setLoggedIn = (boolValue: boolean) => {
    return { type: 'SET_LOGGED_IN', boolValue }
}

export const setUserId = (userId: string | null) => {
    return { type: 'SET_USER_ID', userId }
}

export const setUserFirstName = (userFirstName: string | null) => {
    return { type: 'SET_USER_FIRST_NAME', userFirstName }
}

export const setUserLastName = (userLastName: string | null) => {
    return { type: 'SET_USER_LAST_NAME', userLastName }
}

export const setLoginEmail = (loginEmail: string) => {
    return { type: 'SET_LOGIN_EMAIL', loginEmail }
}

export const setLoginPassword = (loginPassword: string) => {
    return { type: 'SET_LOGIN_PASSWORD', loginPassword }
}

export const setForgotPasswordEmail = (forgotPasswordEmail: string) => {
    return { type: 'SET_FORGOT_PASSWORD_EMAIL', forgotPasswordEmail }
}

// reset login credentials 

export const setResetPasswordEmail = (resetPasswordEmail: string) => {
    return { type: 'SET_RESET_PASSWORD_EMAIL', resetPasswordEmail }
}

export const setResetPasswordOldPassword = (resetPasswordOldPassword: string) => {
    return { type: 'SET_RESET_PASSWORD_OLD_PASSWORD', resetPasswordOldPassword }
}

export const setResetPasswordNewPassword = (resetPasswordNewPassword: string) => {
    return { type: 'SET_RESET_PASSWORD_NEW_PASSWORD', resetPasswordNewPassword }
}

export const setResetPasswordConfirmNewPassword = (resetPasswordConfirmNewPassword: string) => {
    return { type: 'SET_RESET_PASSWORD_CONFIRM_NEW_PASSWORD', resetPasswordConfirmNewPassword }
}

// verification

export const setVerificationEmail = (verificationEmail: string) => {
    return { type: 'SET_VERIFICATION_EMAIL', verificationEmail }
}

// search

export const handleChangeSearch = (inputValue: string) => {
    return { type: 'HANDLE_CHANGE_SEARCH', inputValue }
}

export const handleClickSearch = (cityToSearch: string) => {
    return { type: 'HANDLE_CLICK_SEARCH', cityToSearch }
}

export const setSearchValue = (inputValue: string) => {
    return { type: 'HANDLE_CHANGE_SEARCH', inputValue }
}

export const setRedirect = (boolValue: boolean) => {
    return { type: 'SET_REDIRECT', boolValue }
}