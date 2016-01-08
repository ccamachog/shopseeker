import React from 'react';
import Header from '../common/header/Header';
import ImgTagList from '../common/img-tag-list/ImgTagList';
import FlatFooter from '../common/flat-footer/FlatFooter';
import { connect } from 'react-redux';
import {selectTag as selectTagAct, deselectTag as deselectTagAct} from '../../actions/TagsAction';

class TagsScreen extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div style={{width:'360px'}}>
                <Header title="Tags Screen" />
                <ImgTagList tags={this.props.tags} selectTag={this.selectTag} deselectTag={this.deselectTag}/>
                <FlatFooter />
            </div>
        );
    }
    selectTag = (id) => {
        this.props.dispatch(selectTagAct(id));
    };

    deselectTag = (id) => {
        this.props.dispatch(deselectTagAct(id));
    };
}
function select(state) {
    return {
        tags: state.tags
    }
}
export default connect(select)(TagsScreen)