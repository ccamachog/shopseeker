import lanes from './LaneReducer';
import notes from './NoteReducer';
import { combineReducers } from 'redux'

const todoApp = combineReducers({
    notes,
    lanes
});

export default todoApp