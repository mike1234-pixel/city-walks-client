import { combineReducers } from 'redux';
import walksReducer from './walksReducer'
import sightsReducer from './sightsReducer';
import citiesReducer from './citiesReducer';
import boardsReducer from './boardsReducer';

const rootReducer = combineReducers({
  sightsState: sightsReducer,
  walksState: walksReducer,
  citiesState: citiesReducer,
  boardsState: boardsReducer
});

export default rootReducer;