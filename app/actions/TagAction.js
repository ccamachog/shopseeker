export const GET_TAG_LIST = 'TAG__GET_TAG_LIST';

export function getTagList(tag) {
    return {type: GET_TAG_LIST, tag}
}
