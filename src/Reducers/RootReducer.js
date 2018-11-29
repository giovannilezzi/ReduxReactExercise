import { combineReducers } from 'redux';
import ChannelsReducer from './ChannelsReducer'
import FormReducer from './FormReducer'
import SurveyReducer from './SurveyReducer'

const RootReducer = combineReducers({
    FormReducer,
    ChannelsReducer,
    SurveyReducer,
});
export default RootReducer
