import React from 'react';
import { Route } from 'react-router-dom';

import App from './Components/App';
import Home from "./Components/Home";

export default (
    <Route exact path="/" component={Home} >
        <Route path="/app" component={App} />
    </Route>
);
//this.prop