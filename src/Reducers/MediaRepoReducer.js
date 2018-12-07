import React from 'react';
import ActionTypes from "../Actions/ActionTypes";

const initialState = {
    files: [],
    isLoaded: false
}

const MediaRepoReducer = (state = initialState , action) => {
    switch (action.type) {
        case ActionTypes.FILE:
            console.log("Sono nel reducer")
            return {...state, files: state.files.concat(action.payload.newValue)};
        default:
            return state;
    }
}

export default MediaRepoReducer
