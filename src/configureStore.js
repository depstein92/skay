
import { createStore, applyMiddleware, compose } from 'redux';
import storage from 'redux-persist/es/storage';
import { createLogger } from 'redux-logger';
import rootReducer from './reducers/index';
import { persistStore, persistReducer } from 'redux-persist'

const reducer = persistReducer({ key: 'root', storage }, rootReducer);

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, {}, composeEnhancers(applyMiddleware(createLogger())))
const persistor = persistStore(store)
export { store, persistor };
