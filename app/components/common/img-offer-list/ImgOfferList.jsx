import React from 'react';
import './ImgOfferList.scss';
import GridList from 'material-ui/lib/grid-list/grid-list';
import ImgOffer from '../img-offer/ImgOffer.jsx';

import Avatar from 'material-ui/lib/avatar';
import Card from 'material-ui/lib/card/card';
import CardActions from 'material-ui/lib/card/card-actions';
import CardHeader from 'material-ui/lib/card/card-header';
import CardMedia from 'material-ui/lib/card/card-media';
import CardTitle from 'material-ui/lib/card/card-title';
import FlatButton from 'material-ui/lib/flat-button';
import CardText from 'material-ui/lib/card/card-text';
import Star from 'material-ui/lib/svg-icons/toggle/star';
import StarBorder from 'material-ui/lib/svg-icons/toggle/star-border';
import GridTile from 'material-ui/lib/grid-list/grid-tile';
import IconButton from 'material-ui/lib/icon-button';

export default class ImgOfferList extends React.Component {
    render() {
        const offers = this.props.offers;

        return (
            <div className="shopup-img-offer-list">
                {/*"Grid list with all possible overrides"
                <GridList
                    cols={2}
                    padding={2}
                    className="grid-list"
                    cellHeight={200}
                    style={{width: '100%', overflowY: 'auto', marginBottom: 24}}
                >*/}
                <div className="grid-list">
                    {offers.map(tile => <ImgOffer key={tile.id} offer={tile} showOffer={this.props.showOffer}
                                                     favoriteOffer={this.props.favoriteOffer}
                                                     unfavoriteOffer={this.props.unfavoriteOffer}/>)}
                    {offers.map(tile => <ImgOffer key={tile.id} offer={tile} showOffer={this.props.showOffer}
                                                  favoriteOffer={this.props.favoriteOffer}
                                                  unfavoriteOffer={this.props.unfavoriteOffer}/>)}
                    {offers.map(tile => <ImgOffer key={tile.id} offer={tile} showOffer={this.props.showOffer}
                                                  favoriteOffer={this.props.favoriteOffer}
                                                  unfavoriteOffer={this.props.unfavoriteOffer}/>)}
                    {/*</GridList>*/}
                    </div>
            </div>
        );
    }
}