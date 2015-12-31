import React from 'react';
import Carousel from '../common/carousel/Carousel';
import RaisedButton from 'material-ui/lib/raised-button';
import FontIcon from 'material-ui/lib/font-icon';
import FacebookLogin from '../common/facebook-login/FacebookLogin';
import Paper from 'material-ui/lib/paper';
import './loginScreen.scss';

export default class LoginScreen extends React.Component {

    render() {
        return (
            <div style={{width:'400px'}} className="shopup-login-screen">
                {/* <AppBar
                 title="Title"
                 iconClassNameRight="material-icons icon-expand-more" /> */}
                <div style={{width:'400px',height:'300px'}}>
                    <Carousel/>
                    <RaisedButton label="Facebook" primary={true}/>
                </div>

                <FacebookLogin callback={this.responseFacebook} textButton="Continuar con Facebook"/>

            </div>
        );
    }

    responseFacebook(response) {
        debugger;
        console.log(response);
    }
}

/*


 <FlatButton linkButton={true} href="https://github.com/callemall/material-ui" secondary={true} label="GitHub">
 <FontIcon style={styles.exampleFlatButtonIcon} className="muidocs-icon-custom-github" />
 </FlatButton>
 */
