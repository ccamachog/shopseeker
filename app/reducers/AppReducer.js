import { combineReducers } from 'redux'
import statusApp from './statusAppReducer';
import tags from './tagsReducer';
const todoApp = combineReducers({
    statusApp,
    tags
});

export default todoApp
