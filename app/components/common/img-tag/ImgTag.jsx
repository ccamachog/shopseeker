import React from 'react';
import GridTile from 'material-ui/lib/grid-list/grid-tile';
import IconButton from 'material-ui/lib/icon-button';
import CheckIcon from 'material-ui/lib/svg-icons/navigation/check';

export default class ImgTag extends React.Component {
    render() {
        const tag = this.props.tag;

        return (
            <GridTile
                actionIcon={<IconButton><CheckIcon color="white"/></IconButton>}
                actionPosition="right"
                titlePosition="bottom"
                padding={0}
                title={tag.name}
                titleBackground={tag.color}
                style={{backgroundColor: tag.color}}
            >
                <img src={tag.img} />
            </GridTile>
        );
    }
}