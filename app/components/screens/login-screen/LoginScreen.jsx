import React from 'react';
import Carousel from '../../common/carousel/Carousel';
import RaisedButton from 'material-ui/lib/raised-button';
import FontIcon from 'material-ui/lib/font-icon';
import FacebookLogin from '../../common/facebook-login/FacebookLogin';
import Paper from 'material-ui/lib/paper';
import './loginScreen.scss';

export default class LoginScreen extends React.Component {

    render() {
        return (
            <div className="shopup-login-screen">
                <div style={{width:'100%',height:'300px'}}>
                    <Carousel/>
                </div>
                <FacebookLogin callback={this.responseFacebook} textButton="Continuar con Facebook"/>

            </div>
        );
    }

    responseFacebook(response) {
        console.log(response);
    }
}

/*


 <FlatButton linkButton={true} href="https://github.com/callemall/material-ui" secondary={true} label="GitHub">
 <FontIcon style={styles.exampleFlatButtonIcon} className="muidocs-icon-custom-github" />
 </FlatButton>
 */
