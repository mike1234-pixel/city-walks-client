import Board from "../types/Boards/Board";
import State from "../types/State/Boards/State";
import * as actions from "../constants/constants";
import { PayloadAction } from "@reduxjs/toolkit";

const initialState: State = {
  boards: [],
};

const boardsReducer: (
  state: State,
  action: PayloadAction<Array<Board>, typeof actions.SAVE_BOARDS>
) => State = (state = initialState, action) => {
  switch (action.type) {
    case "SAVE_BOARDS":
      return { ...state, boards: action.payload };
    default:
      return state;
  }
};

export default boardsReducer;
