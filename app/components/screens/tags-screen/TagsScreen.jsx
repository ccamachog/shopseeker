import React from 'react';
import Header from '../../common/header/Header';
import ImgTagList from '../../common/img-tag-list/ImgTagList';
import FlatFooter from '../../common/flat-footer/FlatFooter';
import { connect } from 'react-redux';
import {selectTag as selectTagAct, deselectTag as deselectTagAct} from '../../../actions/TagsAction';
import {setHeaderState} from '../../../actions/HeaderStateAction';

class TagsScreen extends React.Component {
    constructor(props) {
        super(props);
        this.configStatusBar();
    }

    render() {
        return (
            <div style={{width:'360px'}}>
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

    configStatusBar = () => {
        let action,
            headerInfo = {
                title: 'Tag Screen'
            };
        action = setHeaderState(headerInfo);
        this.props.dispatch(action);
    };
}
function select(state) {
    return {
        tags: state.tags
    }
}
export default connect(select)(TagsScreen)