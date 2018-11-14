import ActionTypes from "../Actions/ActionTypes";

const initialState = {
    selectedValue: 'Please select',
};

const SurveyReducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionTypes.SAVE_SELECT_OPTION:
            return {
                ...state,
                selectedValue: action.payload.newValue
            }

        default:
            return state;
    }
};

export default SurveyReducer;
