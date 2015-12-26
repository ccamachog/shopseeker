import { CREATE, UPDATE, REMOVE, ATTACHTOLANE, DETACHFROMLANE } from '../../actions/old/LaneActions';

import NoteRecord from '../../types/old/NoteRecord';
import LaneRecord from '../../types/old/LaneRecord';
import {List} from 'immutable';

//state is a list
export default function laneReducer(state = new List(), action = '') {
    switch (action.type) {
        case CREATE:
        {
            return state.push(action.lane);
        }
        case UPDATE:
        {
            let index = state.findIndex((lane, index)=>lane.id === action.id);
            if (index !== -1) {
                return state.update(index, (lane) => lane.set('name', action.name));
            } else {
                return state;
            }
        }
        case REMOVE:
        {
            let index = state.findIndex((lane, index)=>lane.id === action.id);

            if (index !== -1) {
                return state.delete(index);
            } else {
                return state;
            }
        }
        case ATTACHTOLANE:
        {
            let index = state.findIndex((lane, index)=>lane.id === action.laneId);
            if (index !== -1) {
                return state.update(index, (lane) => lane.set('notes', lane.notes.add(action.noteId)));
            } else {
                return state;
            }
        }
        case DETACHFROMLANE:
        {
            let index = state.findIndex((lane, index)=>lane.laneId === action.id);
            if (index !== -1) {
                return state.update(index, (lane) => lane.set('notes', lane.notes.delete(action.noteId)));
            } else {
                return state;
            }
        }
        default:
            return state
    }
}


