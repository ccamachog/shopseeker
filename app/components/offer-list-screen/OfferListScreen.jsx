import React from 'react';
import FlatHeader from '../common/FlatHeader.jsx';
import FloatFooter from '../common/FloatFooter.jsx';
import ImgOfferList from '../common/ImgOfferList.jsx';

export default class OfferListScreen extends React.Component {
    render() {
        return (<div className="offer-list-screen">
            ~OfferListScreen~
            <flat-header />
            <img-offer-list />
            <float-footer />
        </div>);
    }
}