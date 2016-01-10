import React from 'react';


import Checkbox from 'material-ui/lib/checkbox';
import GridTile from 'material-ui/lib/grid-list/grid-tile';
import IconButton from 'material-ui/lib/icon-button';
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
                actionIcon={<IconButton><StarBorder color="white"/></IconButton>}
                actionPosition="right"
                titlePosition="bottom"
                padding={4}
                title={offer.name + offer.description}
                titleBackground={gradientBg}
                titlePosition="top"
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
}

