import State from "../types/State/Search/State";
import * as Actions from "../types/Actions";

const initialState: State = {
  redirect: false,
  searchValue: "",
};

const searchReducer: (
  state: State,
  action:
    | Actions.HandleChangeSearch
    | Actions.HandleClickSearch
    | Actions.SetRedirect
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
