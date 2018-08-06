
import { createStore, applyMiddleware, compose } from 'redux';
import storage from 'redux-persist/es/storage';
import { createLogger } from 'redux-logger';
import rootReducer from './reducers/index';
import { persistStore, persistCombineReducers } from 'redux-persist'

const reducer = persistCombineReducers({ key: 'root', storage }, rootReducer);

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

let store = createStore(rootReducer, {}, composeEnhancers(applyMiddleware(createLogger())))
let persistor = persistStore(store)
export { store, persistor };
