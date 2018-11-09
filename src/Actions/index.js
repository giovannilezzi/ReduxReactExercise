import ActionTypes from './ActionTypes';

export const changeValueName = (event) => {
    return {
        type: ActionTypes.CHANGE_VALUE_NAME,
        payload: {
            newValue: event.target.value
        },
    };
};

export const changeValueSurname = (event) => {
    return {
        type: ActionTypes.CHANGE_VALUE_SURNAME,
        payload: {
            newValue: event.target.value
        },
    };
};

export const buttonClicked = (event) => {
    return {
        type: ActionTypes.BUTTON_CLICKED,
        payload: {
            newValue: event.target.value
        }
    }
};
