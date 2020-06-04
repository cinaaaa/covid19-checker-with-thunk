import { combineReducers } from 'redux';
import {staticReducer} from './statics/statics.reducer';

export default combineReducers({
  statics: staticReducer
});
