import Sight from "../types/Sights/Sight"
import Walk from "../types/Walks/Walk"
import City from "../types/Cities/City"
import Board from "../types/Boards/Board"
import * as types from '../constants/constants'
import { Dispatch } from "redux"
import axios, { AxiosError, AxiosResponse } from "axios"

// data

export const saveSights: () => (dispatch: Dispatch) => Promise<any> = () => {
    return (dispatch) => {
        return axios.get('https://city-walks.herokuapp.com/blog').then(
            (res: AxiosResponse) => {
                let sights: Array<Sight> = res.data
                dispatch({ type: types.SAVE_SIGHTS, sights })
            }
        ).catch((err: AxiosError) => {
            console.log(err)
        });
    };
};

export const saveWalks: () => (dispatch: Dispatch) => Promise<any> = () => {
    return (dispatch) => {
        return axios.get('https://city-walks.herokuapp.com/walks').then(
            (res: AxiosResponse) => {
                let walks: Array<Walk> = res.data
                dispatch({ type: types.SAVE_WALKS, walks })
            }

        ).catch((err: AxiosError) => {
            console.log(err)
        });
    };
};

export const saveCities: () => (dispatch: Dispatch) => Promise<any> = () => {
    return (dispatch) => {
        return axios.get('https://city-walks.herokuapp.com/cities').then(
            (res: AxiosResponse) => {
                let cities: Array<City> = res.data
                dispatch({ type: types.SAVE_CITIES, cities })
            }
        ).catch((err: AxiosError) => {
            console.log(err)
        });
    };
};

export const saveBoards: () => (dispatch: Dispatch) => Promise<any> = () => {
    return (dispatch) => {
        return axios.get('https://city-walks.herokuapp.com/boards').then(
            (res: AxiosResponse) => {
                let boards: Array<Board> = res.data
                dispatch({ type: types.SAVE_BOARDS, boards })
            }
        ).catch((err: AxiosError) => {
            console.log(err)
        });
    };
};

// registration

export const setFirstName = (firstName: string) => {
    return { type: types.SET_FIRST_NAME, firstName }
}

export const setLastName = (lastName: string) => {
    return { type: types.SET_LAST_NAME, lastName }
}

export const setRegistrationEmail = (registrationEmail: string) => {
    return { type: types.SET_REGISTRATION_EMAIL, registrationEmail }
}

export const setRegistrationPassword = (registrationPassword: string) => {
    return { type: types.SET_REGISTRATION_PASSWORD, registrationPassword }
}

export const setActivationMessageEmphasis = (activationMessageEmphasis: string) => {
    return { type: types.SET_ACTIVATION_MESSAGE_EMPHASIS, activationMessageEmphasis }
}

// login

export const setPrivacyPopupVisible = (boolValue: boolean) => {
    return { type: types.SET_POPUP_VISIBLE, boolValue }
}

export const setLoggedIn = (boolValue: boolean) => {
    return { type: types.SET_LOGGED_IN, boolValue }
}

export const setUserId = (userId: string | null) => {
    return { type: types.SET_USER_ID, userId }
}

export const setUserFirstName = (userFirstName: string | null) => {
    return { type: types.SET_USER_FIRST_NAME, userFirstName }
}

export const setUserLastName = (userLastName: string | null) => {
    return { type: types.SET_USER_LAST_NAME, userLastName }
}

export const setLoginEmail = (loginEmail: string) => {
    return { type: types.SET_LOGIN_EMAIL, loginEmail }
}

export const setLoginPassword = (loginPassword: string) => {
    return { type: types.SET_LOGIN_PASSWORD, loginPassword }
}

export const setForgotPasswordEmail = (forgotPasswordEmail: string) => {
    return { type: types.SET_FORGOT_PASSWORD_EMAIL, forgotPasswordEmail }
}

// reset login credentials 

export const setResetPasswordEmail = (resetPasswordEmail: string) => {
    return { type: types.SET_RESET_PASSWORD_EMAIL, resetPasswordEmail }
}

export const setResetPasswordOldPassword = (resetPasswordOldPassword: string) => {
    return { type: types.SET_RESET_PASSWORD_OLD_PASSWORD, resetPasswordOldPassword }
}

export const setResetPasswordNewPassword = (resetPasswordNewPassword: string) => {
    return { type: types.SET_RESET_PASSWORD_NEW_PASSWORD, resetPasswordNewPassword }
}

export const setResetPasswordConfirmNewPassword = (resetPasswordConfirmNewPassword: string) => {
    return { type: types.SET_RESET_PASSWORD_CONFIRM_NEW_PASSWORD, resetPasswordConfirmNewPassword }
}

// verification

export const setVerificationEmail = (verificationEmail: string) => {
    return { type: types.SET_VERIFICATION_EMAIL, verificationEmail }
}

// search

export const handleChangeSearch = (inputValue: string) => {
    return { type: types.HANDLE_CHANGE_SEARCH, inputValue }
}

export const handleClickSearch = (cityToSearch: string) => {
    return { type: types.HANDLE_CLICK_SEARCH, cityToSearch }
}

export const setSearchValue = (inputValue: string) => {
    return { type: types.HANDLE_CHANGE_SEARCH, inputValue }
}

export const setRedirect = (boolValue: boolean) => {
    return { type: types.SET_REDIRECT, boolValue }
}