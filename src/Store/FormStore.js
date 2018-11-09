import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import RootReducer from "../Reducers/RootReducer";

const middleware = [
    thunkMiddleware,
];

export default createStore(RootReducer, compose(
    applyMiddleware(...middleware),
    // Expose store to Redux DevTools extension.
    global.devToolsExtension ? global.devToolsExtension() : fct => fct,
));
