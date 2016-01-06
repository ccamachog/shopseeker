import { combineReducers } from 'redux'
import statusApp from './statusAppReducer';
const todoApp = combineReducers({
    statusApp
});

export default todoApp
