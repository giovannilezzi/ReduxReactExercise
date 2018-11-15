import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './Components/App';
import Home from "./Components/Home";


import './Css/styles.css'
import {Router, Route  } from 'react-router-dom';

import store from './Store/AppStore'
import SurveyContainer from "./Containers/SurveyContainer";
import history from './hystory'

ReactDOM.render(
    <Provider store={store}>


        <Router history={history}>
            <div>
                <Route exact path="/" component={Home} />
                <Route path="/APP" component={SurveyContainer} />

            </div>
        </Router>

    </Provider>,
    document.getElementById('root'),
);
