import { combineReducers } from 'redux'
//import notes from './OfferReducer';
import statusApp from './statusAppReducer';
import tags from './TagsReducer';
const todoApp = combineReducers({
    statusApp,
    tags
});

export default todoApp
