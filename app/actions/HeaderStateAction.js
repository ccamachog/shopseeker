export const SET_HEADER_STATE = 'HEADER_STATE__SET_HEADER_STATE';



export function setHeaderState(headerInfo,resetHeader=true) {
    return {type: SET_HEADER_STATE, headerInfo, resetHeader}
}
