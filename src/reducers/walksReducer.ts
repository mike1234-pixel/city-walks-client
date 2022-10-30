import Walk from "../types/Walks/Walk";
import State from "../types/State/Walks/State";
import * as actions from "../constants/constants";
import { PayloadAction } from "@reduxjs/toolkit";

const initialState: State = {
  walks: [],
};

const walksReducer: (
  state: State,
  action: PayloadAction<Array<Walk>, typeof actions.SAVE_WALKS>
) => State = (state = initialState, action) => {
  switch (action.type) {
    case "SAVE_WALKS":
      return { ...state, walks: action.payload };
    default:
      return state;
  }
};

export default walksReducer;
