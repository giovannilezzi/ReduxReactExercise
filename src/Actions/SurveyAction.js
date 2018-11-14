import ActionTypes from './ActionTypes';

export function saveSelectValue(event) {
    return {
        type: ActionTypes.SAVE_SELECT_OPTION,
        payload: {
            newValue: event.target.value
        }}
}
