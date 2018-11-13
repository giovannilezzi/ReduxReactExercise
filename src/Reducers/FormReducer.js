import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import ActionTypes from "../Actions/ActionTypes";
import store from '../Store/AppStore'
import App from "../Components/App";

const initialState = {
    name: 'Initial value',
    surname: 'Initial value',
    state: {}
};

const changeValueName = (state, action) => {
    return Object.assign({}, state, {
        name: action.payload.newValue
    });
};

const changeValueSurname = (state, action) => {
    return Object.assign({}, state, {
        surname: action.payload.newValue
    });
};

const buttonClicked = (state, action) => {
    alert(state.name + " " + state.surname)

    ReactDOM.render(
        <Provider store={store}>
            <App />
        </Provider>,
        document.getElementById('root'),
    );

    return Object.assign({}, state, {
        value: action.payload.newValue
    })
}

const FormReducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionTypes.CHANGE_VALUE_NAME:
            return changeValueName(state, action);

        case ActionTypes.CHANGE_VALUE_SURNAME:
            return changeValueSurname(state, action);

        case ActionTypes.BUTTON_CLICKED:
            return buttonClicked(state, action);

        default:
            return state;
    }
};

export default FormReducer;
