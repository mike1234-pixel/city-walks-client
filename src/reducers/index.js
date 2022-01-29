import { combineReducers } from 'redux';
import sightsReducer from './sightsReducer';

const rootReducer = combineReducers({
  sightsState: sightsReducer,
});

export default rootReducer;