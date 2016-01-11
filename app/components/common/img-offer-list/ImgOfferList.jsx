import React from 'react';
import GridList from 'material-ui/lib/grid-list/grid-list';
import ImgOffer from '../img-offer/ImgOffer.jsx';

export default class ImgOfferList extends React.Component {
    render() {
        const offers = this.props.offers;

        return (
                <GridList
                    cellHeight={200}
                    style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around', height: 640, overflowY: 'auto'}}
                >
                    {
                        offers.map(tile => <ImgOffer key={tile.id} offer={tile} showOffer={this.props.showOffer} favoriteOffer={this.props.favoriteOffer} unfavoriteOffer={this.props.unfavoriteOffer}  />)
                    }
                </GridList>
        );
    }
}