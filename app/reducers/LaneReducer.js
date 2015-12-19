import { CREATE, UPDATE, REMOVE, ATTACHTOLANE, DETACHFROMLANE } from '../actions/LaneActions';

import NoteRecord from '../types/NoteRecord';
import LaneRecord from '../types/LaneRecord';
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

/*function create(state,lane) {


 lane.id = uuid.v4();
 lane.notes = lane.notes || [];

 this.setState({
 lanes: lanes.concat(lane)
 });
 }
 function update({id, name}) {
 const lanes = this.lanes;
 const targetId = this.findLane(id);

 if(targetId < 0) {
 return;
 }

 lanes[targetId].name = name;

 this.setState({lanes});
 }
 function remove(id) {
 const lanes = this.lanes;
 const targetId = this.findLane(state,id);

 if(targetId < 0) {
 return;
 }

 this.setState({
 lanes: lanes.slice(0, targetId).concat(lanes.slice(targetId + 1))
 });
 }
 function attachToLane({laneId, noteId}) {
 if(!noteId) {
 this.waitFor(NoteStore);

 noteId = NoteStore.getState().notes.slice(-1)[0].id;
 }

 const lanes = this.lanes;
 const targetId = this.findLane(laneId);

 if(targetId < 0) {
 return;
 }

 const lane = lanes[targetId];

 if(lane.notes.indexOf(noteId) === -1) {
 lane.notes.push(noteId);

 this.setState({lanes});
 }
 else {
 console.warn('Already attached note to lane', lanes);
 }
 }
 function detachFromLane({laneId, noteId}) {
 const lanes = this.lanes;
 const targetId = this.findLane(laneId);

 if(targetId < 0) {
 return;
 }

 const lane = lanes[targetId];
 const notes = lane.notes;
 const removeIndex = notes.indexOf(noteId);

 if(removeIndex !== -1) {
 lane.notes = notes.slice(0, removeIndex).
 concat(notes.slice(removeIndex + 1));

 this.setState({lanes});
 }
 else {
 console.warn('Failed to remove note from a lane as it didn\'t exist', lanes);
 }
 }*/
function findLane(state, id) {
    const lanes = state;
    const laneIndex = lanes.findIndex((lane) => lane.id === id);

    if (laneIndex < 0) {
        console.warn('Failed to find lane', lanes, id);
    }

    return laneIndex;
}
