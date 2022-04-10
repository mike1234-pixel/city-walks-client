import { combineReducers } from 'redux';
import walksReducer from './walksReducer'
import sightsReducer from './sightsReducer';

const rootReducer = combineReducers({
  sightsState: sightsReducer,
  walksState: walksReducer
});

export default rootReducer;