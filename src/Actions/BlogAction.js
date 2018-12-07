import ActionTypes from "./ActionTypes";
import axios from "axios";
import history from "../history";


export const receivedResponse = (obj) => ({
    type: ActionTypes.RECEIVE_RESPONSE,
    payload: {
        newValue: obj
    },
});

export function asyncCall(requestBody) {
    var url = 'http://localhost:3001/blog'
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

export const receivedBlogs = (obj) => (
    {
    type: ActionTypes.RECEIVE_BLOGS,
    payload: {
        newValue: obj
    },
});

export function asyncCallAllBlogs() {
    var url = 'http://localhost:3001/getBlog'
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
