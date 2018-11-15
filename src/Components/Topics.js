import React from 'react';
import {Route , Link } from 'react-router-dom';
import Topic from './Topic'
import { Button } from 'react-bootstrap';



const Topics = ({ match }) => (
    <div>
        <h2>Topics</h2>

                <Button bsStyle="info" >  <Link to={`${match.url}/rendering`}>Rendering with React</Link> </Button>

                <Button bsStyle="warning"> <Link to={`${match.url}/components`}>Components</Link> </Button>

                <Button bsStyle="success"> <Link to={`${match.url}/props-v-state`}>Props v. State</Link> </Button>


        <Route path={`${match.path}/:topicId`} component={Topic} />
        <Route
            exact
            path={match.path}
            render={() => <h3>Please select a topic.</h3>}
        />
    </div>
);

export default Topics ;
