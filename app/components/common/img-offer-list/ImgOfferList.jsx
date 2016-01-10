import React from 'react';
import GridList from 'material-ui/lib/grid-list/grid-list';
import ImgOffer from '../img-offer/ImgOffer.jsx';

export default class ImgOfferList extends React.Component {
    render() {
        const offers = this.props.tags;

        return (
                <GridList
                    cellHeight={200}
                    style={{width: '100%', height: 640, overflowY: 'auto'}}
                >
                    {
                        offers.map(tile => <ImgOffer key={tile.id} offer={tile} showOffer={this.props.showOffer} />)
                    }
                </GridList>
        );
    }
}