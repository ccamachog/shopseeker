import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import Header from '../../common/header/Header';
import './OfferListScreen.scss'
import ImgOfferList from '../../common/img-offer-list/ImgOfferList.jsx';
import SelectedImgOffer from '../../common/selected-img-offer/SelectedImgOffer.jsx';
import FlatFooter from '../../common/flat-footer/FlatFooter';
import { connect } from 'react-redux';
import {showOffer as showOfferAct, favoriteOffer as favoriteOfferAct, unfavoriteOffer as unfavoriteOfferAct} from '../../../actions/OffersAction';
import {setHeaderState} from '../../../actions/HeaderStateAction';

class OfferListScreen extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let selectedOffer = this.props.selected;
        return (
            <div className="shopup-offer-list-screen">
                <ReactCSSTransitionGroup transitionName="transition" transitionEnterTimeout={300} transitionLeaveTimeout={100}>
                {
                    (selectedOffer)?
                    <SelectedImgOffer key={selectedOffer.id} offer={selectedOffer} showOffer={this.showOffer}
                                      favoriteOffer={this.props.favoriteOffer}
                                      unfavoriteOffer={this.props.unfavoriteOffer} />
                        :
                    <ImgOfferList offers={this.props.offers} showOffer={this.showOffer}
                                  favoriteOffer={this.favoriteOffer} unfavoriteOffer={this.unfavoriteOffer}/>

                    }
                </ReactCSSTransitionGroup>
                {/*<FlatFooter />*/}
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
        offers: state.offers.list,
        selected: state.offers.selected
    }
}
export default connect(select)(OfferListScreen)