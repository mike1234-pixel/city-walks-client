import Sight from "../types/Sights/Sight";
import State from "../types/State/Sights/State";
import * as actions from "../constants/constants";
import { PayloadAction } from "@reduxjs/toolkit";

const initialState: State = {
  sights: [],
};

const sightsReducer: (
  state: State,
  action: PayloadAction<Array<Sight>, typeof actions.SAVE_SIGHTS>
) => State = (state = initialState, action) => {
  switch (action.type) {
    case "SAVE_SIGHTS":
      return { ...state, sights: action.payload };
    default:
      return state;
  }
};

export default sightsReducer;
