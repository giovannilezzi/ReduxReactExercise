import ActionTypes from './ActionTypes';
import history from '../history'

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

export const buttonClicked = () => {
    return {
        type: ActionTypes.BUTTON_CLICKED,
    }
};

export const buttonClickedTopics = (event) => {
    return {
        type: ActionTypes.TOPICS_CLICKED,
        payload: {
            newValue: event.target.value
        }
    }
};
