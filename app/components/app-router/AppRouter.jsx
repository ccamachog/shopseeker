import React from 'react';
import { render } from 'react-dom';
import { Router, Route, Link } from 'react-router';
import LoginScreen from '../screens/login-screen/LoginScreen';
import HubScreen from '../screens/hub-screen/HubScreen';
import OfferScreen from '../screens/offer-screen/OfferScreen';
import TagsScreen from  '../screens/tags-screen/TagsScreen';
import Header from '../common/header/Header';

export default class AppRouter extends React.Component {
    render() {
        return (
            <Router>
                <Route path="/" component={Header}>
                    <Route path="/hub" component={HubScreen}/>
                    <Route path="/offer" component={OfferScreen}/>
                </Route>
                <Route path="/tags" component={TagsScreen}/>
            </Router>
        );

    }
}