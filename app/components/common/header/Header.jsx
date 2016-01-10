import React from 'react';
import AppBar from 'material-ui/lib/app-bar';
import SideNav from '../side-nav/SideNav';
import { connect } from 'react-redux';
import {setHeaderState} from '../../../actions/HeaderStateAction';
class Header extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                {/*<AppBar title={_title} iconClassNameRight="material-icons icon-search"
                        onLeftIconButtonTouchTap={this.onClickMenu}/>*/}
                <div style={{position: 'fixed',zIndex: 1000,width: '100%',top:0,left:0}}>
                    <AppBar title={this.props.title} iconClassNameRight={this.props.rightIconClass}
                            onRightIconButtonTouchTap={this.props.rightIconTouchHandler}
                            iconClassNameLeft={this.props.leftIconClass || 'material-icons icon-menu'}
                            onLeftIconButtonTouchTap={this.props.leftIconTouchHandler || this.requestChange.bind(this,true)}
                            />
                </div>
                <SideNav open={this.props.isSideMenuOpen} onRequestChange={this.requestChange}/>

                <div style={{marginTop: '64px'}}>
                    {this.props.children}
                </div>
            </div>
        );
    }

    requestChange = (isSideMenuOpen) => {
        const action = setHeaderState({isSideMenuOpen},false);
        this.props.dispatch(action);
    };
}
function select(state) {
    return {
        title: state.header.title,
        isSideMenuOpen: state.header.isSideMenuOpen,
        rightIconClass: state.header.rightIconClass,
        rightIconTouchHandler: state.header.rightIconTouchHandler,
        leftIconClass: state.header.leftIconClass,
        leftIconTouchHandler: state.header.leftIconTouchHandler

    }
}

// Wrap the component to inject dispatch and state into it
export default connect(select)(Header)