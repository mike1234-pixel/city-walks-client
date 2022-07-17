import Sight from "../types/Sights/Sight"
import Walk from "../types/Walks/Walk"
import City from "../types/Cities/City"
import Board from "../types/Boards/Board"
import * as types from '../constants/constants'
import { Dispatch } from "redux"
import axios, { AxiosError, AxiosResponse } from "axios"
import * as RegistrationAndLoginActions from "../reducers/loginReducer"
import * as PrivacyPopupActions from '../reducers/privacyPopupReducer'
import * as SearchActions from '../reducers/searchReducer'
import * as BoardActions from '../reducers/boardsReducer'
import * as CitiesActions from '../reducers/citiesReducer'
import * as SightsActions from '../reducers/sightsReducer'
import * as WalksActions from '../reducers/walksReducer'

// data

export const saveSights: () => (dispatch: Dispatch<SightsActions.SaveSightsAction>) => Promise<any> = () => {
    return (dispatch) => {
        return axios.get('https://city-walks.herokuapp.com/blog').then(
            (res: AxiosResponse) => {
                let sights: Array<Sight> = res.data
                dispatch({ type: types.SAVE_SIGHTS, payload: sights })
            }
        ).catch((err: AxiosError) => {
            console.error(err)
        });
    };
};

export const saveWalks: () => (dispatch: Dispatch<WalksActions.SaveWalksAction>) => Promise<any> = () => {
    return (dispatch) => {
        return axios.get('https://city-walks.herokuapp.com/walks').then(
            (res: AxiosResponse) => {
                let walks: Array<Walk> = res.data
                dispatch({ type: types.SAVE_WALKS, payload: walks })
            }

        ).catch((err: AxiosError) => {
            console.error(err)
        });
    };
};

export const saveCities: () => (dispatch: Dispatch<CitiesActions.SaveCitiesAction>) => Promise<any> = () => {
    return (dispatch) => {
        return axios.get('https://city-walks.herokuapp.com/cities').then(
            (res: AxiosResponse) => {
                let cities: Array<City> = res.data
                dispatch({ type: types.SAVE_CITIES, payload: cities })
            }
        ).catch((err: AxiosError) => {
            console.error(err)
        });
    };
};

export const saveBoards: () => (dispatch: Dispatch<BoardActions.SaveBoardsAction>) => Promise<any> = () => {
    return (dispatch) => {
        return axios.get('https://city-walks.herokuapp.com/boards').then(
            (res: AxiosResponse) => {
                let boards: Array<Board> = res.data
                dispatch({ type: types.SAVE_BOARDS, payload: boards })
            }
        ).catch((err: AxiosError) => {
            console.error(err)
        });
    };
};

// registration

export const setFirstName: (payload: string) => RegistrationAndLoginActions.RegisterFirstNameAction = (payload) => {
    return { type: types.SET_FIRST_NAME, payload }
}

export const setLastName: (payload: string) => RegistrationAndLoginActions.RegisterLastNameAction = (payload) => {
    return { type: types.SET_LAST_NAME, payload }
}

export const setRegistrationEmail: (payload: string) => RegistrationAndLoginActions.RegisterEmailAction = (payload) => {
    return { type: types.SET_REGISTRATION_EMAIL, payload }
}

export const setRegistrationPassword: (payload: string) => RegistrationAndLoginActions.RegisterPasswordAction = (payload) => {
    return { type: types.SET_REGISTRATION_PASSWORD, payload }
}

export const setActivationMessageEmphasis: (payload: string) => RegistrationAndLoginActions.ActivationMessageEmphasisAction = (payload) => {
    return { type: types.SET_ACTIVATION_MESSAGE_EMPHASIS, payload }
}

// login

export const setPrivacyPopupVisible: (payload: boolean) => PrivacyPopupActions.PriacyPopupVisibleAction = (payload) => {
    return { type: types.SET_POPUP_VISIBLE, payload }
}

export const setLoggedIn: (payload: boolean) => RegistrationAndLoginActions.LoggedInAction = (payload) => {
    return { type: types.SET_LOGGED_IN, payload }
}

export const setUserId: (payload: string | null) => RegistrationAndLoginActions.UserIdAction = (payload) => {
    return { type: types.SET_USER_ID, payload }
}

export const setUserFirstName: (payload: string | null) => RegistrationAndLoginActions.LoginFirstNameAction = (payload) => {
    return { type: types.SET_USER_FIRST_NAME, payload }
}

export const setUserLastName: (payload: string | null) => RegistrationAndLoginActions.LoginLastNameAction = (payload) => {
    return { type: types.SET_USER_LAST_NAME, payload }
}

export const setLoginEmail: (payload: string) => RegistrationAndLoginActions.LoginEmailAction = (payload) => {
    return { type: types.SET_LOGIN_EMAIL, payload }
}

export const setLoginPassword: (payload: string) => RegistrationAndLoginActions.LoginPasswordAction = (payload) => {
    return { type: types.SET_LOGIN_PASSWORD, payload }
}

export const setForgotPasswordEmail: (payload: string) => RegistrationAndLoginActions.ForgotPasswordAction = (payload) => {
    return { type: types.SET_FORGOT_PASSWORD_EMAIL, payload }
}

// reset login credentials 

export const setResetPasswordEmail: (payload: string) => RegistrationAndLoginActions.ResetPasswordEmailAction = (payload) => {
    return { type: types.SET_RESET_PASSWORD_EMAIL, payload }
}

export const setResetPasswordOldPassword: (payload: string) => RegistrationAndLoginActions.ResetPasswordOldPasswordAction = (payload) => {
    return { type: types.SET_RESET_PASSWORD_OLD_PASSWORD, payload }
}

export const setResetPasswordNewPassword: (payload: string) => RegistrationAndLoginActions.ResetPasswordNewPasswordAction = (payload) => {
    return { type: types.SET_RESET_PASSWORD_NEW_PASSWORD, payload }
}

export const setResetPasswordConfirmNewPassword: (payload: string) => RegistrationAndLoginActions.ResetPasswordConfirmNewPasswordAction = (payload) => {
    return { type: types.SET_RESET_PASSWORD_CONFIRM_NEW_PASSWORD, payload }
}

// verification

export const setVerificationEmail: (payload: string) => RegistrationAndLoginActions.VerificationEmailAction = (payload) => {
    return { type: types.SET_VERIFICATION_EMAIL, payload }
}

// search

export const handleChangeSearch: (payload: string) => SearchActions.SearchChangeAction = (payload) => {
    return { type: types.HANDLE_CHANGE_SEARCH, payload }
}

export const handleClickSearch: (payload: string) => SearchActions.SearchClickAction = (payload) => {
    return { type: types.HANDLE_CLICK_SEARCH, payload }
}

export const setSearchValue: (payload: string) => SearchActions.SearchChangeAction = (payload) => {
    return { type: types.HANDLE_CHANGE_SEARCH, payload }
}

export const setRedirect: (payload: boolean) => SearchActions.RedirectAction = (payload) => {
    return { type: types.SET_REDIRECT, payload }
}