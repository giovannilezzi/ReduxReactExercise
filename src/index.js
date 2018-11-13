import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Css/styles.css'

import thunk from 'redux-thunk'
import { logger } from 'redux-logger'

import { createStore, applyMiddleware } from 'redux'
import Home from "./Components/Home";
import RootReducer from "./Reducers/RootReducer";

const store = createStore(
    RootReducer,
    applyMiddleware(thunk, logger),
)


ReactDOM.render(
    <Provider store={store}>
        <Home />
    </Provider>,
    document.getElementById('root'),
);
