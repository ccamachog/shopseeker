import React from 'react';


import Checkbox from 'material-ui/lib/checkbox';
import GridTile from 'material-ui/lib/grid-list/grid-tile';
import IconButton from 'material-ui/lib/icon-button';
import Favorite from 'material-ui/lib/svg-icons/action/favorite';
import FavoriteBorder from 'material-ui/lib/svg-icons/action/favorite-border';

import Star from 'material-ui/lib/svg-icons/toggle/star';
import StarBorder from 'material-ui/lib/svg-icons/toggle/star-border';

export default class ImgOffer extends React.Component {
    constructor(props) {
        super(props);

        const id = props.offer.id;
    }

    randomImgUrl = 'http://lorempixel.com/200/200';
/*
    id: 1,
    name: 'Offer_1',
    description: 'Offer_1_desc',
    photos: new List(),
    price: new PriceRangeRecord({min: 0, max: 100}),
    tags: new List(),
    user: 1,
    rating: 3
*/
    render() {
        const offer = this.props.offer;
        const gradientBg = 'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%,rgba(0,0,0,0.3) 70%,rgba(0,0,0,0) 100%)';
        return (
            <GridTile
                actionIcon={offer.favorite?<IconButton onClick={this.unfavoriteOffer.bind(this)}> <Favorite  color="white"/></IconButton>:
                                        <IconButton  onClick={this.favoriteOffer.bind(this)}><FavoriteBorder color="white"/></IconButton>}
                actionPosition="right"
                titlePosition="bottom"
                padding={2}
                title={offer.title}
                subtitle={offer.description}
                titleBackground={gradientBg}
                titlePosition="top"
                cols={offer.rating >= 4 ? 2 : 1}
                rows={offer.rating >= 4 ? 2 : 1}
                style={{backgroundColor: 'red'}}
                onClick={this.showOffer.bind(this)}
            >
                <img src={this.randomImgUrl}/>
            </GridTile>
        );
    };

    showOffer = () => {
        this.props.showOffer(this.props.offer.id);
    };

    favoriteOffer = () => {
        this.props.favoriteOffer(this.props.offer.id);
    };

    unfavoriteOffer = () => {
        this.props.unfavoriteOffer(this.props.offer.id);
    };
}

