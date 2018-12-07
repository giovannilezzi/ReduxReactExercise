import React from 'react';
import ActionTypes from "../Actions/ActionTypes";

const initialState = {
    blogs: [],
    isLoading: true
}

const BlogReducer = (state = initialState , action) => {
    switch (action.type) {
        case ActionTypes.RECEIVE_BLOGS:
            state.blogs = []
            return { ...state, blogs: state.blogs.concat(action.payload.newValue), isLoading: false};
        default:
            return state;
    }
}

export default BlogReducer
