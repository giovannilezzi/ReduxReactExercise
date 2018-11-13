import {applyMiddleware, createStore} from "redux";
import RootReducer from "../Reducers/RootReducer";
import thunk from "redux-thunk";
import {logger} from "redux-logger";

const store = createStore(
    RootReducer,
    applyMiddleware(thunk, logger),
)

export default store
