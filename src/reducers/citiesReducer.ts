import City from "../types/Cities/City";
import State from "../types/State/Cities/State";
import * as actions from "../constants/constants";
import { PayloadAction } from "@reduxjs/toolkit";

const initialState: State = {
  cities: [],
};

const citiesReducer: (
  state: State,
  action: PayloadAction<Array<City>, typeof actions.SAVE_CITIES>
) => State = (state = initialState, action) => {
  switch (action.type) {
    case "SAVE_CITIES":
      return { ...state, cities: action.payload };
    default:
      return state;
  }
};

export default citiesReducer;
