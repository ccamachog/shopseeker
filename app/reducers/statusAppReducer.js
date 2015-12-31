import {SET_STATUS_MENU} from '../actions/StatusAppAction.js';
import StatusAppRecord from '../types/StatusAppRecord.js';

export default function statusAppReducer(state = new StatusAppRecord(), action = '') {
    switch (action.type) {
        case SET_STATUS_MENU:
        {
            if (state.get('isMenuOpen') === action.open) {
                return state;
            } else {
                return state.set('isMenuOpen', action.open);
            }
        }
        default:
            return state
    }
}