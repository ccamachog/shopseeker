import React from 'react';
import Header from '../common/header/Header';
import ImgTagList from '../common/img-tag-list/ImgTagList';
import FlatFooter from '../common/flat-footer/FlatFooter';
import { connect } from 'react-redux';

export default class TagsScreen extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div style={{width:'360px'}}>
                <Header title="Tags Screen" />
                <ImgTagList tags={this.state.tags} />
                <FlatFooter />
            </div>
        );
    }
}