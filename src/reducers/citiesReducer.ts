import State from "../types/State/Cities/State";
import * as Actions from "../types/Actions";

const initialState: State = {
  cities: [],
};

const citiesReducer: (state: State, action: Actions.SaveCities) => State = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case "SAVE_CITIES":
      return { ...state, cities: action.payload };
    default:
      return state;
  }
};

export default citiesReducer;
