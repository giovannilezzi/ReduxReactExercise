import { combineReducers } from 'redux';
import ChannelsReducer from './ChannelsReducer'
import FormReducer from './FormReducer'
import SurveyReducer from './SurveyReducer'
import AsyncReducer from './AsyncReducer'
import BlogReducer from './BlogReducer'
import MediaRepoReducer from './MediaRepoReducer'

const RootReducer = combineReducers({
    FormReducer,
    ChannelsReducer,
    SurveyReducer,
    AsyncReducer,
    BlogReducer,
    MediaRepoReducer
});
export default RootReducer
