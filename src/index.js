import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import ReduxPromise from 'redux-promise';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor, store } from './configureStore';
import App from './components/app';
import rootReducer from './reducers/index';
const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(rootReducer)}>
    <PersistGate persistor={persistor}>
     <App />
    </PersistGate>
  </Provider>
  , document.querySelector('.container'));
