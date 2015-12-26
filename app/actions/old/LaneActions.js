//export default alt.generateActions('create', 'update','delete','attachToLane', 'detachFromLane');

export const CREATE = 'LANE_CREATE';
export const UPDATE = 'LANE_UPDATE';
export const REMOVE = 'LANE_REMOVE';
export const ATTACHTOLANE = 'LANE_ATTACHTOLANE';
export const DETACHFROMLANE = 'LANE_DETACHFROMLANE';


export function create(lane) {
    return {type: CREATE, lane}
}

export function update(id, name) {
    return {type: UPDATE, id, name}
}

export function remove(id) {
    return {type: REMOVE, id}
}

export function attachToLane(laneId, noteId) {
    return {type: ATTACHTOLANE, laneId, noteId}
}

export function detachFromLane(laneId, noteId) {
    return {type: DETACHFROMLANE, laneId, noteId}
}
