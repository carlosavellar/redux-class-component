import { createStore, applyMiddleware } from 'redux';
import counterReducer from '../reducer/counter';
import thunk from 'redux-thunk';

const store = createStore(counterReducer, applyMiddleware(thunk));

export default store;
