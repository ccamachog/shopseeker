//export default alt.generateActions('create', 'update', 'delete');


export const CREATE = 'NOTE_CREATE';
export const UPDATE = 'NOTE_UPDATE';
export const REMOVE = 'NOTE_REMOVE';


export function create(note) {
    return {type: CREATE, note}
}

export function update(id, task) {
    return {type: UPDATE, id, task}
}

export function remove(id) {
    return {type: REMOVE, id}
}


