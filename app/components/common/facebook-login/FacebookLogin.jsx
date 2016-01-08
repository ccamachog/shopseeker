import React,{ PropTypes }  from 'react';
import './facebookLogin.scss';
export default class FacebookLogin extends React.Component {
    static propTypes = {
        callback: PropTypes.func.isRequired

    };

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="shopup-facebook-login">
                <div id="fb-root"></div>
                <button onClick={this.click} className="btn-fb-login">
                    <em className="logo-fb"></em>
                    <span className="text-button">{this.props.textButton}</span>
                </button>
            </div>
        );
    }

    componentDidMount() {

        window.fbAsyncInit = () => {
            FB.init({
                appId: '588253644659614',
                cookie: true,  // enable cookies to allow the server to access
                               // the session
                xfbml: true,  // parse social plugins on this page
                version: 'v2.5' // use version 2.2
            });

            //FB.getLoginStatus(this.checkLoginState);
        };
        (function (d, s, id) {
            var js, fjs = d.getElementsByTagName(s)[0];
            if (d.getElementById(id)) return;
            js = d.createElement(s);
            js.id = id;
            js.src = '//connect.facebook.net/es_ES/sdk.js';
            fjs.parentNode.insertBefore(js, fjs);
        }(document, 'script', 'facebook-jssdk'));

    }

    responseApi = (authResponse) => {
        FB.api('/me', (me) => {
            me.accessToken = authResponse.accessToken;
            this.props.callback(me);
        });
    };

    click = () => {
        FB.login(this.checkLoginState, {scope: 'public_profile, email, user_birthday'});
    };

    checkLoginState = (response) => {
        if (response.authResponse) {
            this.responseApi(response.authResponse);
        } else {
            if (this.props.callback) {
                this.props.callback({status: response.status});
            }
        }
    };

}