import {SELECT_TAG, DESELECT_TAG} from '../actions/TagsAction.js';
import {List, Record} from 'immutable';
import TagRecord from '../types/TagRecord';

//Just for test
const randomImgUrl = 'http://lorempixel.com/200/200';
let tags =  new List();
tags = tags.push(
    new TagRecord({
        id: 1,
        name: '#RedTag',
        color: '#F44336',
        img: randomImgUrl,
        selected: true
    }),
    new TagRecord({
        id: 2,
        name: '#PinkTag',
        color: '#E91E63',
        img: randomImgUrl,
        selected: false
    }),
    new TagRecord({
        id: 3,
        name: '#PurpleTag',
        color: '#9C27B0',
        img: randomImgUrl,
        selected: true
    }),
    new TagRecord({
        id: 4,
        name: '#IndigoTag',
        color: '#3F51B5',
        img: randomImgUrl,
        selected: true
    }),
    new TagRecord({
        id: 5,
        name: '#LimeTag',
        color: '#CDDC39',
        img: randomImgUrl,
        selected: false
    }),
    new TagRecord({
        id: 6,
        name: '#YellowTag',
        color: '#FFEB3B',
        img: randomImgUrl,
        selected: false
    }),
    new TagRecord({
        id: 7,
        name: '#OrangeTag',
        color: '#FF9800',
        img: randomImgUrl,
        selected: false
    }),
    new TagRecord({
        id: 8,
        name: '#BlueTag',
        color: '#2196F3',
        img: randomImgUrl,
        selected: false
    })
);

export default function TagsReducer(state = new List(), action = '') {
    debugger;
    if (state.size <= 0)
        return tags;

    switch (action.type) {
        case SELECT_TAG:
        {
            let tagIndex = state.findIndex(tag=>tag.id==action.id);
            if(tagIndex !== -1){
                return state.update(tagIndex, (tag) => tag.set('selected', true));
            }else{
                return state;
            }
        }
        case DESELECT_TAG:
        {
            let tagIndex = state.findIndex(tag=>tag.id==action.id);
            if(tagIndex !== -1){
                return state.update(tagIndex, (tag) => tag.set('selected', false));
            }else{
                return state;
            }
        }
        default:
            return state
    }
}