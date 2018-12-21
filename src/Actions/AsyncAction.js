import ActionTypes from "./ActionTypes";

const MY_API_KEY = 'c39a26d9c12f48dba2a5c00e35684ecc';


export const getChannel = (channel) => ({
    type: ActionTypes.SELECT_CHANNEL,
    payload: {
        newValue: channel
    },
});


export const requestPosts = () => ({
    type: ActionTypes.REQUEST_POSTS,
});

export const receivedPosts = json => ({
    type: ActionTypes.RECEIVED_POSTS,
    payload: {
        newValue: json.articles
    },
});

export function fetchPosts(channel) {
    return function (dispatch) {
        dispatch(requestPosts());
        return fetch(`https://newsapi.org/v1/articles?source=${channel}&apiKey=${MY_API_KEY}`)
            .then(
                response => response.json(),
                error => console.log('An error occurred.', error),
            )
            .then((json) => {
                    dispatch(receivedPosts(json));
                },
            );
    };
}
