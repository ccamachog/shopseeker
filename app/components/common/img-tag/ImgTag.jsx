import React from 'react';


import Checkbox from 'material-ui/lib/checkbox';
import GridTile from 'material-ui/lib/grid-list/grid-tile';
import IconButton from 'material-ui/lib/icon-button';
import SelectedIcon from 'material-ui/lib/svg-icons/toggle/check-box';
import DeselectedIcon from 'material-ui/lib/svg-icons/toggle/check-box-outline-blank';

export default class ImgTag extends React.Component {
    constructor(props) {
        super(props);

        const id = props.tag.id;
    }

    render() {
        const tag = this.props.tag;

        return (
            <GridTile
                actionIcon={tag.selected?<IconButton> <SelectedIcon color="white"/></IconButton>:
                                        <IconButton><DeselectedIcon color="white"/></IconButton>}
                actionPosition="right"
                titlePosition="bottom"
                padding={0}
                title={tag.name}
                titleBackground={tag.color}
                style={{backgroundColor: tag.color}}
                onClick={tag.selected?this.deselectTag:this.selectTag}
            >
                <img src={tag.img}/>
            </GridTile>
        );
    };

    selectTag = () => {
        this.props.selectTag(this.props.tag.id);
    };

    deselectTag = () => {
        this.props.deselectTag(this.props.tag.id);
    };


}

