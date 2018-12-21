import ActionTypes from "./ActionTypes";
import axios from "axios";
import history from "../../../ReduxReactExercise/src/history";


export const receivedResponse = (obj) => ({
    type: ActionTypes.RECEIVED_RESPONSE,
    payload: {
        newValue: obj
    },
});

export function asyncCall(requestBody) {
    var url = 'http://localhost:3002/saveBlog'
    return function (dispatch) {
        axios.post(url, JSON.stringify(requestBody))
            .then((result) => {
                const response = result.data;
                const obj = response.Response
                dispatch(receivedResponse(obj))
                history.push('/Blog')
            })
            .catch((err) => {
                console.log("Errore: " + err.response.data)
            })
    };
}

export const receivedBlogs = (obj) => ({
    type: ActionTypes.RECEIVED_BLOGS,
    payload: {
        newValue: obj
    },
});

export function asyncCallAllBlogs() {
    var url = 'http://localhost:3002/getBlog'
    return function (dispatch) {
        axios.get(url)
            .then((result) => {
                const obj = []
                const response = result.data.Response;
                dispatch(receivedBlogs(response))
            })
            .catch((err) => {
                console.log("Errore: " + err.response.data)
            })
    };
}
