import React from 'react';
import { render } from 'react-dom';
import { Router, Route, Link } from 'react-router';
import LoginScreen from '../login-screen/LoginScreen';
import FilterScreen from '../filter-screen/FilterScreen';
import HubScreen from '../hub-screen/HubScreen';
import MapScreen from '../map-screen/MapScreen';
import OfferListScreen from '../offer-list-screen/OfferListScreen';
import OfferScreen from '../offer-screen/OfferScreen.jsx';
import TagsScreen from  '../tags-screen/TagsScreen.jsx';

export default class AppRouter extends React.Component {
    render() {
        return (
            <Router>
                <Route path="/" component={LoginScreen}/>
                <Route path="/filter" component={FilterScreen}/>
                <Route path="/hub" component={HubScreen}/>
                <Route path="/map" component={MapScreen}/>
                <Route path="/offer-list" component={OfferListScreen}/>
                <Route path="/offer" component={OfferScreen}/>
                <Route path="/tags" component={TagsScreen}/>
            </Router>
        );
    }
}