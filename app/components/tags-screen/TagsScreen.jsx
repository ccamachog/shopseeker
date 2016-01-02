import React from 'react';
import Header from '../common/header/Header';
import FlatFooter from '../common/flat-footer/FlatFooter';
import GridList from 'material-ui/lib/grid-list/grid-list';
import GridTile from 'material-ui/lib/grid-list/grid-tile';
import IconButton from 'material-ui/lib/icon-button';
import CheckIcon from 'material-ui/lib/svg-icons/navigation/check';
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
                <GridList
                    cellHeight={200}
                    style={{width: 360, height: 640, overflowY: 'auto'}}
                >
                    {
                        tags.map(tile => <GridTile
                            actionIcon={<IconButton><CheckIcon color="white"/></IconButton>}
                            actionPosition="right"
                            titlePosition="bottom"
                            padding={0}
                            title={tile.name}
                            style={{backgroundColor: tile.color}}
                        ><img src={tile.img}/></GridTile>)
                    }
                </GridList>
                <FlatFooter />
            </div>
        );
    }
}