import { combineReducers } from 'redux';
import launchesReducer from './launchesReducer';


export default () => combineReducers({
  launchesReducer: launchesReducer,
});