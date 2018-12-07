import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./Components/Home";
import MediaRepo from "./Components/MediaRepo";
import Topics from './Components/Topics'
import './Css/styles.css'
import { Router, Route, Switch } from 'react-router-dom';
import store from './Store/AppStore'
import SurveyContainer from "./Containers/SurveyContainer";
import history from './history'
import ListBlogContainer from "./Containers/ListBlogContainer";
import MediaRepoContainer from "./Containers/MediaRepoContainer";

ReactDOM.render(
    <Provider store={store}>
        <Router history={history}>
            <div>
                <Route exact path="/" component={MediaRepoContainer} />
                <Route  path="/APP" component={SurveyContainer} />
                <Route  path="/topics" component={Topics} />
                <Route  path="/Blog" component={ListBlogContainer}/>
            </div>
        </Router>
    </Provider>,
    document.getElementById('root'),
);


