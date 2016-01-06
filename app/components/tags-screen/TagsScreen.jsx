import React from 'react';
import Header from '../common/header/Header';
import ImgTagList from '../common/img-tag-list/ImgTagList';
import FlatFooter from '../common/flat-footer/FlatFooter';

import {List, Record} from 'immutable';
import Tag from '../../types/TagRecord';


export default class TagsScreen extends React.Component {
    render() {
        const randomImgUrl = 'http://lorempixel.com/200/200';
        let tags =  new List();
        tags = tags.push(
            new Tag({
                id: 1,
                name: '#RedTag',
                color: '#F44336',
                img: randomImgUrl
            }),
            new Tag({
                id: 2,
                name: '#PinkTag',
                color: '#E91E63',
                img: randomImgUrl
            }),
            new Tag({
                id: 3,
                name: '#PurpleTag',
                color: '#9C27B0',
                img: randomImgUrl
            }),
            new Tag({
                id: 4,
                name: '#IndigoTag',
                color: '#3F51B5',
                img: randomImgUrl
            }),
            new Tag({
                id: 5,
                name: '#LimeTag',
                color: '#CDDC39',
                img: randomImgUrl
            }),
            new Tag({
                id: 6,
                name: '#YellowTag',
                color: '#FFEB3B',
                img: randomImgUrl
            }),
            new Tag({
                id: 7,
                name: '#OrangeTag',
                color: '#FF9800',
                img: randomImgUrl
            }),
            new Tag({
                id: 8,
                name: '#BlueTag',
                color: '#2196F3',
                img: randomImgUrl
            })
        );


        return (
            <div style={{width:'360px'}}>
                <Header title="Tags Screen" />
                <ImgTagList tags={tags} />
                <FlatFooter />
            </div>
        );
    }
}