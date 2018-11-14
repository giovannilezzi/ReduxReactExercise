import ActionTypes from "../Actions/ActionTypes";

const ChannelsReducer = (state = {}, action) => {

    switch (action.type) {

        case ActionTypes.SELECT_CHANNEL:
            return { ...state, channel: action.payload.newValue };

        case ActionTypes.REQUEST_POSTS:
            return { ...state, loading: true };

        case ActionTypes.RECEIVE_POSTS:
            return { ...state, json: action.payload.newValue, loading: false };

        default:
            return state;
    }
};

export default ChannelsReducer;
