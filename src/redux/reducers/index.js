import { combineReducers } from 'redux';
import errorReducer from './errorReducer.js';
import movieReducer from './movieReducer.js';

const rootReducers = combineReducers({
  errors: errorReducer,
  movies: movieReducer
});

export default rootReducers;
