import React from 'react';
import { connect } from 'react-redux';
import {selectTag as selectTagAct, deselectTag as deselectTagAct} from '../../../actions/TagsAction';

import Checkbox from 'material-ui/lib/checkbox';
import GridTile from 'material-ui/lib/grid-list/grid-tile';
import IconButton from 'material-ui/lib/icon-button';
import SelectedIcon from 'material-ui/lib/svg-icons/toggle/check-box';
import DeselectedIcon from 'material-ui/lib/svg-icons/toggle/check-box-outline-blank';

export default class ImgTag extends React.Component {
    constructor(props) {
        super(props);

        const id = props.tag.id;

        //this.select = this.select.bind(this, id);
        //this.deselect = this.deselect.bind(this, id);
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
                onClick={tag.selected?this.selectTag.bind(this, tag.id):this.deselectTag.bind(this, tag.id)}
            >
                <img src={tag.img}/>
            </GridTile>
        );
    }

    selectTag(id) {
        this.props.dispatch(selectTagAct(id));
    }

    deselectTag(id) {
        this.props.dispatch(deselectTagAct(id));
    }
}

// Wrap the component to inject dispatch and state into it
export default connect()(ImgTag)