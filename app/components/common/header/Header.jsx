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
                    <AppBar title={this.props.title} iconClassNameRight={'material-icons '+ this.props.rightIconClass}
                            iconClassNameLeft={'material-icons icon-menu'}
                            onLeftIconButtonTouchTap={this.onLeftIconButtonTouchTap||this.requestChange.bind(this,true)}
                            onRightIconButtonTouchTap={this.props.rightIconTouchHandler}/>
                </div>
                <SideNav open={this.props.isSideMenuOpen} onRequestChange={this.requestChange}/>
                <div>
                    {this.props.children}
                </div>
            </div>
        );
    }

    requestChange = (isSideMenuOpen) => {
        const action = setHeaderState({isSideMenuOpen});
        this.props.dispatch(action);
    };
}
function select(state) {
    debugger;
    return {
        title: state.header.title,
        isSideMenuOpen: state.header.isSideMenuOpen,
        rightIconClass: state.header.rightIconClass,
        rightIconTouchHandler: state.header.rightIconTouchHandler

    }
}

// Wrap the component to inject dispatch and state into it
export default connect(select)(Header)