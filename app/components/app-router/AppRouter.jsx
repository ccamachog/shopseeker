import React from 'react';
import { render } from 'react-dom';
import { Router, Route, Link } from 'react-router';
import LoginScreen from '../screens/login-screen/LoginScreen';
import FilterScreen from '../screens/hub-screen/FilterScreen';
import HubScreen from '../screens/hub-screen/HubScreen';
import OfferListScreen from '../screens/offer-list-screen/OfferListScreen';
import OfferScreen from '../screens/offer-screen/OfferScreen.jsx';
import TagsScreen from  '../screens/tags-screen/TagsScreen.jsx';

export default class AppRouter extends React.Component {
    render() {
        return (
            <Router>
                <Route path="/" component={LoginScreen}/>
                <Route path="/filter" component={FilterScreen}/>
                <Route path="/hub" component={HubScreen}/>
                <Route path="/offer-list" component={OfferListScreen}/>
                <Route path="/offer" component={OfferScreen}/>
                <Route path="/tags" component={TagsScreen}/>
            </Router>
        );
    }
}