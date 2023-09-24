import { PayloadAction } from "@reduxjs/toolkit"
import Walk from "../Walks/Walk"
import * as actions from "../../constants/constants"
import City from "../Cities/City"
import Sight from "../Sights/Sight"
import Board from "../Boards/Board"

export type SaveWalks = PayloadAction<Array<Walk>, typeof actions.SAVE_WALKS>

export type SaveCities = PayloadAction<Array<City>, typeof actions.SAVE_CITIES>

export type SaveSights = PayloadAction<Array<Sight>, typeof actions.SAVE_SIGHTS>

export type SaveBoards = PayloadAction<Array<Board>, typeof actions.SAVE_BOARDS>

export type SetFirstName = PayloadAction<string, typeof actions.SET_FIRST_NAME>

export type SetLastName = PayloadAction<string, typeof actions.SET_LAST_NAME>

export type SetPopupVisible = PayloadAction<
  boolean,
  typeof actions.SET_POPUP_VISIBLE
>

export type HandleChangeSearch = PayloadAction<
  string,
  typeof actions.HANDLE_CHANGE_SEARCH
>

export type HandleClickSearch = PayloadAction<
  string,
  typeof actions.HANDLE_CLICK_SEARCH
>

export type SetSearchValue = PayloadAction<
  string,
  typeof actions.HANDLE_CHANGE_SEARCH
>

export type SetRedirect = PayloadAction<boolean, typeof actions.SET_REDIRECT>
