import { combineReducers } from 'redux';

import ChannelsReducer from './ChannelsReducer'
import FormReducer from './FormReducer'

const RootReducer = combineReducers({
    FormReducer,
    ChannelsReducer
});
export default RootReducer;
