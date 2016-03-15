import { createStore, compose, applyMiddlewares } from 'redux';
import thunkMiddleware from 'redux-thunk';
import promiseMiddleware from 'redux-promise';
import createLogger from 'redux-logger';
import rootReducer from 'shared/reducers';

const logger = createLogger();

const configureStore = (initialState = {}) => {
  return compose(
    applyMiddleware(
      thunkmiddleware,
      promiseMiddleware,
      logger
    )
  )(createStore)(rootReducer, initialState);
};

export default configureStore;
