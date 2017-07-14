import {createStore, applyMiddleware,compose } from 'redux';
import reducers from './reducers';
import {routerMiddleware} from 'react-router-redux';
import createHistory from 'history/createHashHistory';
import thunk from 'redux-thunk';
let history = createHistory();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export default createStore(reducers,composeEnhancers(applyMiddleware(thunk,routerMiddleware(history))));