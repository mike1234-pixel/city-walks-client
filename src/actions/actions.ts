import { Dispatch } from "redux"
import axios from "axios"
import * as actions from "../constants/constants"
import * as Actions from "../types/Actions"
import * as Response from "../types/Response"

export const saveSights: () => (
  dispatch: Dispatch<Actions.SaveSights>
) => Promise<any> = () => {
  return (dispatch) => {
    return axios
      .get("https://city-walks-production.up.railway.app/blog")
      .then((res: Response.SightsResponse) => {
        let sights = res.data
        dispatch({ type: actions.SAVE_SIGHTS, payload: sights })
      })
      .catch((err: Response.SightsError) => {
        console.error(err)
      })
  }
}

export const saveWalks: () => (
  dispatch: Dispatch<Actions.SaveWalks>
) => Promise<any> = () => {
  return (dispatch) => {
    return axios
      .get("https://city-walks-production.up.railway.app/walks")
      .then((res: Response.WalksResponse) => {
        let walks = res.data
        dispatch({ type: actions.SAVE_WALKS, payload: walks })
      })
      .catch((err: Response.WalksError) => {
        console.error(err)
      })
  }
}

export const saveCities: () => (
  dispatch: Dispatch<Actions.SaveCities>
) => Promise<any> = () => {
  return (dispatch) => {
    return axios
      .get("https://city-walks-production.up.railway.app/cities")
      .then((res: Response.CitiesResponse) => {
        let cities = res.data
        dispatch({ type: actions.SAVE_CITIES, payload: cities })
      })
      .catch((err: Response.CitiesError) => {
        console.error(err)
      })
  }
}

export const saveBoards: () => (
  dispatch: Dispatch<Actions.SaveBoards>
) => Promise<any> = () => {
  return (dispatch) => {
    return axios
      .get("https://city-walks-production.up.railway.app/boards")
      .then((res: Response.BoardsResponse) => {
        let boards = res.data
        dispatch({ type: actions.SAVE_BOARDS, payload: boards })
      })
      .catch((err: Response.BoardsError) => {
        console.error(err)
      })
  }
}

export const setPrivacyPopupVisible: (
  payload: boolean
) => Actions.SetPopupVisible = (payload) => {
  return { type: actions.SET_POPUP_VISIBLE, payload }
}

export const handleChangeSearch: (
  payload: string
) => Actions.HandleChangeSearch = (payload) => {
  return { type: actions.HANDLE_CHANGE_SEARCH, payload }
}

export const handleClickSearch: (
  payload: string
) => Actions.HandleClickSearch = (payload) => {
  return { type: actions.HANDLE_CLICK_SEARCH, payload }
}

export const setSearchValue: (payload: string) => Actions.SetSearchValue = (
  payload
) => {
  return { type: actions.HANDLE_CHANGE_SEARCH, payload }
}

export const setRedirect: (payload: boolean) => Actions.SetRedirect = (
  payload
) => {
  return { type: actions.SET_REDIRECT, payload }
}
