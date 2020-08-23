import { createStore } from 'redux';
import { phonesReducer } from './phones/reducer';

export default createStore(
  phonesReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
