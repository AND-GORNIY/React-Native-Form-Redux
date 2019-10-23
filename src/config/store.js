import {createStore, combineReducers, applyMiddleware} from 'redux';
import {logger} from 'redux-logger';
import thunk from 'redux-thunk';
import {reducerInfo} from '../reducers/reducerInfo';

const rootReducer = combineReducers({
  userInfo: reducerInfo,
});

const store = createStore(rootReducer, applyMiddleware(thunk, logger));

export default store;
