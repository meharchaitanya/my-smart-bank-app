import {createStore, applyMiddleware} from 'redux'
import AuthReducer from './reducers/AuthReducer';
import thunk from 'redux-thunk';

const store = createStore(AuthReducer, applyMiddleware(thunk))

export default store;