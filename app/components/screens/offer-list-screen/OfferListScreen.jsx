import React from 'react';
import Header from '../../common/header/Header';
import ImgOfferList from '../../common/img-offer-list/ImgOfferList.jsx';
import FlatFooter from '../../common/flat-footer/FlatFooter';
import { connect } from 'react-redux';
import {showOffer as showOfferAct, favoriteOffer as favoriteOfferAct, unfavoriteOffer as unfavoriteOfferAct} from '../../../actions/OffersAction';
import {setHeaderState} from '../../../actions/HeaderStateAction';

class OfferListScreen extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div style={{width:'100%'}}>
                <ImgOfferList offers={this.props.offers} showOffer={this.showOffer} favoriteOffer={this.favoriteOffer} unfavoriteOffer={this.unfavoriteOffer}/>
                <FlatFooter />
            </div>
        );
    }
    showOffer = (id) => {
        this.props.dispatch(showOfferAct(id));
    };

    favoriteOffer = (id) => {
        this.props.dispatch(favoriteOfferAct(id));
    };

    unfavoriteOffer = (id) => {
        this.props.dispatch(unfavoriteOfferAct(id));
    };

}
function select(state) {
    return {
        offers: state.offers
    }
}
export default connect(select)(OfferListScreen)