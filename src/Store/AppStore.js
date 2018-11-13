import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import RootReducer from "../Reducers/RootReducer";

const middleware = [
    thunk,
];

export default createStore(RootReducer, compose(
    applyMiddleware(...middleware)
));
