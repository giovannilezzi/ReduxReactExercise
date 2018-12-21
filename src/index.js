import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import Topics from './Components/Topics'
import './Css/styles.css'
import { Router, Route } from 'react-router-dom';
import store from './Store/AppStore'
import SurveyContainer from "./Containers/SurveyContainer";
import history from './history'
import ListBlogContainer from "./Containers/ListBlogContainer";
import MediaRepoContainer from "./Containers/MediaRepoContainer";
import ListImageContainer from "./Containers/ListImageContainer";
import Home from "./Components/Home";
import './blog.css';

ReactDOM.render(
    <Provider store={store}>
        <Router history={history}>
            <div>
                <Route exact path="/" component={Home} />
                <Route  path="/APP" component={SurveyContainer} />
                <Route  path="/topics" component={Topics} />
                <Route  path="/Blog" component={ListBlogContainer}/>
                <Route  path="/Images" component={ListImageContainer}/>
            </div>
        </Router>
    </Provider>,
    document.getElementById('root'),
);

