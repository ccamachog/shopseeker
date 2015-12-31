import React from 'react';
import LeftNav from 'material-ui/lib/left-nav';
import List from 'material-ui/lib/lists/list';
import ListItem from 'material-ui/lib/lists/list-item';
import Divider from 'material-ui/lib/divider';
import Avatar from 'material-ui/lib/avatar';
import styles from 'material-ui/lib/styles';
import FileFolder from 'material-ui/lib/svg-icons/file/folder';
import './SideNav.scss';

const colors = styles.Colors;

export default class SideNav extends React.Component {
    static propTypes = {
        open: React.PropTypes.bool,
        onRequestChange: React.PropTypes.func
    };
    static defaultProps = {
        open: false
    };

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="shopup-side-nav">
                <LeftNav open={this.props.open} docked={false} onRequestChange={this.props.onRequestChange}>
                    <div className="avatar">
                        <Avatar
                            icon={<FileFolder />}
                            color={colors.orange200}
                            backgroundColor={colors.pink400}
                            />
                    </div>
                    <div className="user-name">Nombre Usuario</div>
                    <Divider/>
                    <List>
                        <ListItem>Mis Ofertas</ListItem>
                        <ListItem>Faoritos</ListItem>
                    </List>
                </LeftNav>
            </div>
        );
    }
}
