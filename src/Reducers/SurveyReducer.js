import ActionTypes from "../Actions/ActionTypes";

const initialState = {
    selectedValue: 'Please select',
};

const buttonClicked = (state) => {
    alert("submit ok")
    return {...state}
}

const SurveyReducer = (state = initialState, action) => {
    switch (action.type) {

        case ActionTypes.CHANGE_VALUE_NAME:
            return { ...state, name: action.payload.newValue};

        case ActionTypes.SAVE_SELECT_OPTION:
            return {
                ...state,
                selectedValue: action.payload.newValue
            }

        case ActionTypes.ON_SUBMIT:
            return buttonClicked(state)

        default:
            return state;
    }
};

export default SurveyReducer
