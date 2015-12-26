import React from 'react';
import Carousel from '../common/carousel/Carousel';
import RaisedButton from 'material-ui/lib/raised-button';
import FontIcon from 'material-ui/lib/font-icon';

export default class LoginScreen extends React.Component {

    render() {
        return (
            <div>
                <div style={{width:'300px',height:'300px'}}>
                    <Carousel/>
                    <RaisedButton label="Facebook" primary={true}/>
                </div>
            </div>
        );
    }
}

/*


 <FlatButton linkButton={true} href="https://github.com/callemall/material-ui" secondary={true} label="GitHub">
 <FontIcon style={styles.exampleFlatButtonIcon} className="muidocs-icon-custom-github" />
 </FlatButton>
 */