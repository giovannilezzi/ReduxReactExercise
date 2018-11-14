import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Css/styles.css'
import Home from "./Components/Home";
import store from './Store/AppStore'
import SurveyContainer from "./Containers/SurveyContainer";

ReactDOM.render(
    <Provider store={store}>
        <SurveyContainer />
    </Provider>,
    document.getElementById('root'),
);
