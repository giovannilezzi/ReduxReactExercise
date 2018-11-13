import ActionTypes from './ActionTypes';

export const SELECT_CHANNEL = 'SELECT_CHANNEL';
export const REQUEST_POSTS = 'REQUEST_POSTS';
export const RECEIVE_POSTS = 'RECEIVE_POSTS';

const MY_API_KEY = 'c39a26d9c12f48dba2a5c00e35684ecc';

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

export const buttonClicked = (event) => {
    return {
        type: ActionTypes.BUTTON_CLICKED,
        payload: {
            newValue: event.target.value
        }
    }
};

export const getChannel = channel => ({
    type: ActionTypes.SELECT_CHANNEL,
    channel,
});


export const requestPosts = () => ({
    type: ActionTypes.REQUEST_POSTS,
});

export const receivedPosts = json => ({
    type: RECEIVE_POSTS,
    json: json.articles,
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
