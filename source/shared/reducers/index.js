import { combineReducers } from 'redux';
import { routeReducer } from 'react-router-redux';

import booksReducer from 'shared/Books/reducers/booksReducer';

const rootReducer = combineReducers({
  books: booksReducer,
  routing: routeReducer
});

export default rootReducer;
