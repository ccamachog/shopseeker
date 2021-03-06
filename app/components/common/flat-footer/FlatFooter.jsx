import React from 'react';
import Toolbar from 'material-ui/lib/toolbar/toolbar';
import ToolbarGroup from 'material-ui/lib/toolbar/toolbar-group';
import FlatButton from 'material-ui/lib/flat-button';
export default class FlatFooter extends React.Component {
    render() {
        return (
            <div className="float-footer">
                <Toolbar>
                    <ToolbarGroup firstChild={true} float="left">
                        <FlatButton label="Left button" onTouchTap={function(){}}/>
                    </ToolbarGroup>
                    <ToolbarGroup lastChild={true} >
                        <FlatButton label="Right button" onTouchTap={function(){}}/>
                    </ToolbarGroup>
                </Toolbar>
            </div>
        );
    }
}