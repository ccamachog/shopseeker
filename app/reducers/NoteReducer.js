import { CREATE, UPDATE, REMOVE } from '../actions/NoteActions';

import NoteRecord from '../types/NoteRecord';
import {List} from 'immutable';

//State is a list
export default function NoteReducer(state = new List(), action = '') {
    switch (action.type) {

        case CREATE:
        {
            return state.push(action.note);
        }
        case UPDATE:
        {
            let index = state.findIndex((note, index)=>note.id === action.id);
            if (index !== -1) {
                return state.update(index, (note) => note.set('task', action.task));
            } else {
                return state;
            }

        }
        case REMOVE:
        {
            let index = state.findIndex((note, index)=>note.id === action.id);

            if (index !== -1) {
                return state.delete(index);
            } else {
                return state;
            }
        }
        default:
            return state
    }
}
