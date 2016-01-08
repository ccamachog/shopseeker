import React from 'react';
import AppBar from 'material-ui/lib/app-bar';
import SideNav from '../side-nav/SideNav';
import { connect } from 'react-redux';
import {setStatusMenu} from '../../../actions/StatusAppAction';
class Header extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let _title = this.props.title || 'Title';

        return (
            <div>
                <AppBar title={_title} iconClassNameRight="material-icons icon-search"
                        onLeftIconButtonTouchTap={this.onClickMenu}/>
                <SideNav open={this.props.isMenuOpen} onRequestChange={this.requestChange}/>
            </div>
        );
    }

    onClickMenu = () => {
        let action = setStatusMenu(true);
        this.props.dispatch(action);
    };
    requestChange = (open) => {
        let action = setStatusMenu(open);
        this.props.dispatch(action);
    };
}
function select(state) {
    return {
        isMenuOpen: state.statusApp.isMenuOpen
    }
}

// Wrap the component to inject dispatch and state into it
export default connect(select)(Header)