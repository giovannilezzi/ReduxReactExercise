import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from "./Store/FormStore";
import FormContainer from "./Containers/FormContainer";
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
    <Provider store={store}>
        <FormContainer />
    </Provider>,
    document.getElementById('root'),
);
