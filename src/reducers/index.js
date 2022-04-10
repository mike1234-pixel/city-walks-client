import { combineReducers } from 'redux';
import walksReducer from './walksReducer'
import sightsReducer from './sightsReducer';
import citiesReducer from './citiesReducer';
import boardsReducer from './boardsReducer';
import recaptchaReducer from './recaptchaReducer';

const rootReducer = combineReducers({
  sightsState: sightsReducer,
  walksState: walksReducer,
  citiesState: citiesReducer,
  boardsState: boardsReducer,
  recaptchaState: recaptchaReducer
});

export default rootReducer;