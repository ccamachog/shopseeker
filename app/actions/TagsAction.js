export const SELECT_TAG = 'SELECT_TAG';
export const DESELECT_TAG = 'DESELECT_TAG';


export function selectTag(id) {
    return {type: SELECT_TAG, id}
}

export function deselectTag(id) {
    return {type: DESELECT_TAG, id}
}