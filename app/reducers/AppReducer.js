import { combineReducers } from 'redux'
import header from './headerStateReducer';
import tags from './tagsReducer';
const todoApp = combineReducers({
    header,
    tags
});

export default todoApp
