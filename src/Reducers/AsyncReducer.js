import ActionTypes from "../Actions/ActionTypes";

const AsyncReducer = (state = {} , action) => {
    switch (action.type) {

        case ActionTypes.RECEIVED_RESPONSE:
            return { ...state, response: action.payload.newValue};
        default:
            return state;
    }
}

export default AsyncReducer
