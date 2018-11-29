import React from 'react';
import ActionTypes from "../Actions/ActionTypes";

const initialState = {
    name: 'Initial value',
    surname: 'Initial value'
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


const buttonClicked = (state) => {
    alert(state.name + " " + state.surname)
    return {...state}
}

const buttonClickedTopics = (state, action) => {
    return {state, value: action.payload.newValue}
}

const FormReducer = (state = initialState, action) => {
    switch (action.type) {

        case ActionTypes.CHANGE_VALUE_NAME:
            return { ...state, name: action.payload.newValue};

        case ActionTypes.CHANGE_VALUE_SURNAME:
            return { ...state, surname: action.payload.newValue};;

        case ActionTypes.BUTTON_CLICKED:
            return buttonClicked(state)

        case ActionTypes.TOPICS_CLICKED:
            return buttonClickedTopics(state, action);

        default:
            return state;
    }
}

export default FormReducer
