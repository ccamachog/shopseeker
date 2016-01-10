import React from 'react';
import { render } from 'react-dom';
import { Router, Route, Link, IndexRoute } from 'react-router';
import LoginScreen from '../screens/login-screen/LoginScreen';
import HubScreen from '../screens/hub-screen/HubScreen';
import OfferScreen from '../screens/offer-screen/OfferScreen';
import TagsScreen from  '../screens/tags-screen/TagsScreen';
import Header from '../common/header/Header';

export default class AppRouter extends React.Component {
    render() {
        return (
            <Router>
                <Route path="/login" component={LoginScreen}/>
                <Route path="/" component={Header}>
                    <IndexRoute onEnter={this.redirectLogin}/>
                    <Route path="hub" component={HubScreen}/>
                    <Route path="offer" component={OfferScreen}/>
                    <Route path="tags" component={TagsScreen}/>
                </Route>
            </Router>
        );

    }

    redirectLogin() {
        window.location.replace('/#/login');
    }
}