import React from 'react';
import GridList from 'material-ui/lib/grid-list/grid-list';
import ImgOffer from '../img-offer/ImgOffer.jsx';

export default class ImgOfferList extends React.Component {
    render() {
        const offers = this.props.offers;
        const gridListStyle = {width: '100%', height: '55%', overflowY: 'auto', marginBottom: 24};
        return (


        <div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around'}}>
            {/*Grid list with all possible overrides*/}
            <GridList
                cols={2}
                cellHeight={'10rem'}
                padding={1}
                style={gridListStyle}
            >
                    {
                        offers.map(tile => <ImgOffer key={tile.id} offer={tile} showOffer={this.props.showOffer} favoriteOffer={this.props.favoriteOffer} unfavoriteOffer={this.props.unfavoriteOffer}  />)
                    }
                </GridList>
            </div>
        );
    }
}