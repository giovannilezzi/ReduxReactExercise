import RootReducer from "../Reducers/RootReducer";
import thunk from "redux-thunk";
import createHistory from "history/createBrowserHistory";
import {routerMiddleware as createRouterMiddleware,} from "react-router-redux";
import { createStore, applyMiddleware, compose } from "redux";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const history = createHistory();
const routerMiddleware = createRouterMiddleware(history);
const middleware = composeEnhancers(applyMiddleware(routerMiddleware, thunk));

const store = createStore(RootReducer, middleware);


/*const store = createStore(
    RootReducer,
    applyMiddleware(thunk, logger),
)*/

export default store
