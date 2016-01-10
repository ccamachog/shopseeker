import {SET_HEADER_STATE} from '../actions/HeaderStateAction.js';
import { Record} from 'immutable';

let HeaderStateRecord = Record({
    isSideMenuOpen:false,
    title:'Title',
    rightIconClass:'',
    rightIconTouchHandler:null,
    leftIconClass:'',
    leftIconTouchHandler:null
});


export default function statusAppReducer(state = new HeaderStateRecord(), action = '') {
    switch (action.type) {
        case SET_HEADER_STATE:
        {
            const headerInfo = action.headerInfo;
            const resetHeader = action.resetHeader;
            let newState=resetHeader?new HeaderStateRecord():state;

            if (headerInfo.isSideMenuOpen != undefined && (state.get('isSideMenuOpen') !== headerInfo.isSideMenuOpen)) {
                newState = newState.set('isSideMenuOpen',headerInfo.isSideMenuOpen);
            }
            if (headerInfo.title != undefined && (state.get('title') !== headerInfo.title)) {
                newState = newState.set('title',headerInfo.title);
            }
            if (headerInfo.rightIconClass != undefined && (state.get('rightIconClass') !== headerInfo.rightIconClass)) {
                newState = newState.set('rightIconClass',headerInfo.rightIconClass);
            }
            if (headerInfo.rightIconTouchHandler != undefined && (state.get('rightIconTouchHandler') !== headerInfo.rightIconTouchHandler)) {
                newState = newState.set('rightIconTouchHandler',headerInfo.rightIconTouchHandler);
            }
            if (headerInfo.rightIconClass != undefined && (state.get('rightIconClass') !== headerInfo.rightIconClass)) {
                newState = newState.set('rightIconClass',headerInfo.rightIconClass);
            }
            if (headerInfo.leftIconClass != undefined && (state.get('leftIconClass') !== headerInfo.leftIconClass)) {
                newState = newState.set('leftIconClass',headerInfo.leftIconClass);
            }
            if (headerInfo.leftIconTouchHandler != undefined && (state.get('leftIconTouchHandler') !== headerInfo.leftIconTouchHandler)) {
                newState = newState.set('leftIconTouchHandler',headerInfo.leftIconTouchHandler);
            }

            return newState;
        }
        default:
            return state
    }
}