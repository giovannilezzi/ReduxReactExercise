import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./Components/Home";
import Topics from './Components/Topics'
import './Css/styles.css'
import { Router, Route, Switch } from 'react-router-dom';
import store from './Store/AppStore'
import SurveyContainer from "./Containers/SurveyContainer";
import history from './history'

ReactDOM.render(
    <Provider store={store}>
        <Router history={history}>
            <div>
                <Route exact path="/" component={Home} />
                <Route  path="/APP" component={SurveyContainer} />
                <Route  path="/topics" component={Topics} />
            </div>
        </Router>
    </Provider>,
    document.getElementById('root'),
);


