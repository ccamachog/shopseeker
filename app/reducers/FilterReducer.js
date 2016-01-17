import {UPDATE_FILTER} from '../actions/FilterAction';
import { Record} from 'immutable';
import FilterRecord from '../types/FilterRecord';


export default function filterReducer(state = new FilterRecord(), action = '') {
    switch (action.type) {
        case UPDATE_FILTER:
        {
            const filter = action.filter;
            return filter;
        }
        default:
            return state
    }
}