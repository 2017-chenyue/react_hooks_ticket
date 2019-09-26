import { createStore, applyMiddleware, combineReducers } from 'redux';
import reducers from './reducers';
import { thunk } from 'thunk';

export default createStore(
  combineReducers(reducers),
  {

  },
  applyMiddleware(thunk)
);
