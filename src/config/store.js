import {createStore, combineReducers, applyMiddleware} from 'redux';
import {logger} from 'redux-logger';
import thunk from 'redux-thunk';
import component1 from '../reducers/component1';

const rootReducer = combineReducers({
  userInfo: component1,
});

const store = createStore(rootReducer, applyMiddleware(thunk, logger));

export default store;
