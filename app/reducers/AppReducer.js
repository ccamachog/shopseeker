import lanes from '../reducers/LaneReducer';
import notes from '../reducers/NoteReducer';
import { combineReducers } from 'redux'

const todoApp = combineReducers({
    notes,
    lanes
});

export default todoApp