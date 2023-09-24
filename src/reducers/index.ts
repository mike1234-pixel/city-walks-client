import { combineReducers } from "redux"
import walksReducer from "./walksReducer"
import sightsReducer from "./sightsReducer"
import citiesReducer from "./citiesReducer"
import boardsReducer from "./boardsReducer"
import searchReducer from "./searchReducer"
import privacyPopupReducer from "./privacyPopupReducer"

// Reducer type from redux is type any?
const rootReducer = combineReducers({
  sightsState: sightsReducer,
  walksState: walksReducer,
  citiesState: citiesReducer,
  boardsState: boardsReducer,
  searchState: searchReducer,
  privacyPopupState: privacyPopupReducer,
})

export default rootReducer
