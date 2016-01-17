import { combineReducers } from 'redux'
import header from './headerStateReducer';
import tags from './tagsReducer';
import offers from './offersReducer';
import filter from './FilterReducer';
const todoApp = combineReducers({
    header,
    tags,
    offers
});

export default todoApp
