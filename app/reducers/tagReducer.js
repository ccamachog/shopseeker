import {SET_STATUS_MENU} from '../actions/TagAction.js';
import TagRecord from '../types/TagRecord.js';
import {List} from 'immutable';

export default function tagReducer(state = new List(), action = '') {
    switch (action.type) {
        case GET_TAG_LIST:
        {
            if (state.size() > 0) {
                return state;
            } else {
                return state.push(new TagRecord({
                    id: 1,
                    name: 'Comer y Beber',
                    className: 'foodTag'
                })).push({
                    id: 2,
                    name: 'Salud y Belleza',
                    className: 'healthyTag'
                });
            }
        }
        default:
            return state
    }
}