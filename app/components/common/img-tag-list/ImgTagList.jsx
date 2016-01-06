import React from 'react';
import GridList from 'material-ui/lib/grid-list/grid-list';
import ImgTag from '../img-tag/ImgTag';

export default class ImgTagList extends React.Component {
    render() {
        const tags = this.props.tags;

        return (
                <GridList
                    cellHeight={200}
                    style={{width: 360, height: 640, overflowY: 'auto'}}
                >
                    {
                        tags.map(tile => <ImgTag tag={tile}/>)
                    }
                </GridList>
        );
    }
}