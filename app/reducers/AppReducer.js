import { combineReducers } from 'redux'
//import notes from './OfferReducer';
import statusApp from './statusAppReducer';
const todoApp = combineReducers({
    statusApp
});

export default todoApp
