import React from 'react';
import Header from '../../common/header/Header';
import ImgOfferList from '../../common/img-offer-list/ImgOfferList.jsx';
import FlatFooter from '../../common/flat-footer/FlatFooter';
import { connect } from 'react-redux';
import {showOffer as showOfferAct} from '../../../actions/OffersAction';
import {setHeaderState} from '../../../actions/HeaderStateAction';

class OfferListScreen extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div style={{width:'100%'}}>
                <ImgOfferList tags={this.props.offers} showOffer={this.showOffer}/>
                <FlatFooter />
            </div>
        );
    }
    showOffer = (id) => {
        this.props.dispatch(showOfferAct(id));
    };
}
function select(state) {
    return {
        offers: state.offers
    }
}
export default connect(select)(OfferListScreen)