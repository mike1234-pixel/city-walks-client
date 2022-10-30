import State from "../types/State/Search/State";
import * as actions from "../constants/constants";
import { PayloadAction } from "@reduxjs/toolkit";

const initialState: State = {
  redirect: false,
  searchValue: "",
};

type SearchAction =
  | typeof actions.HANDLE_CHANGE_SEARCH
  | typeof actions.HANDLE_CLICK_SEARCH;
type RedirectAction = typeof actions.SET_REDIRECT;

const searchReducer: (
  state: State,
  action:
    | PayloadAction<string, SearchAction>
    | PayloadAction<boolean, RedirectAction>
) => State = (state = initialState, action) => {
  switch (action.type) {
    case "SET_REDIRECT":
      return { ...state, redirect: action.payload };
    case "HANDLE_CHANGE_SEARCH":
      return { ...state, searchValue: action.payload };
    case "HANDLE_CLICK_SEARCH":
      return { ...state, searchValue: action.payload };
    default:
      return state;
  }
};

export default searchReducer;
