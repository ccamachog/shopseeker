import React from 'react';


import Checkbox from 'material-ui/lib/checkbox';
import GridTile from 'material-ui/lib/grid-list/grid-tile';
import IconButton from 'material-ui/lib/icon-button';
import Favorite from 'material-ui/lib/svg-icons/action/favorite';
import FavoriteBorder from 'material-ui/lib/svg-icons/action/favorite-border';

import Star from 'material-ui/lib/svg-icons/toggle/star';
import StarBorder from 'material-ui/lib/svg-icons/toggle/star-border';


import Avatar from 'material-ui/lib/avatar';
import Card from 'material-ui/lib/card/card';
import CardActions from 'material-ui/lib/card/card-actions';
import CardHeader from 'material-ui/lib/card/card-header';
import CardMedia from 'material-ui/lib/card/card-media';
import CardTitle from 'material-ui/lib/card/card-title';
import FlatButton from 'material-ui/lib/flat-button';
import CardText from 'material-ui/lib/card/card-text';


export default class ImgOffer extends React.Component {
    constructor(props) {
        super(props);

        //const id = props.offer.id;

        //this.cardStyle = 'width:'+(props.offer.rating >= 4 ? '100%' : '50%');
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
     ////////////
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
     ///////////
     <Card>
     <CardHeader
     title={offer.title}
     subtitle={offer.price.min + ' - ' +offer.price.min}
     avatar="http://lorempixel.com/100/100/nature/"/>
     <CardMedia>
     <img src={this.randomImgUrl}/>
     </CardMedia>
     <CardText>
     {offer.description}
     </CardText>
     </Card>

     */
    render() {
        const offer = this.props.offer;
        const gradientBg = 'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%,rgba(0,0,0,0.3) 70%,rgba(0,0,0,0) 100%)';

        return (
            <Card

                onClick={this.showOffer.bind(this)}
                style={{background:'red'}}
            >
                <CardHeader
                    title={offer.title}
                    subtitle={offer.price.min + ' - ' +offer.price.min}
                    avatar="http://lorempixel.com/100/100/">
                    <div style={{float:'right'}}>
                    {offer.favorite?
                    <IconButton onClick={this.unfavoriteOffer.bind(this)}> <Favorite
                        color="white"/></IconButton>:
                    <IconButton onClick={this.favoriteOffer.bind(this)}><FavoriteBorder
                        color="white"/></IconButton>}
                    </div>
                </CardHeader>
                <CardMedia>
                        <img src="http://lorempixel.com/social"/>
                </CardMedia>
                <CardText>
                    {offer.description}
                </CardText>
            </Card>
        );
    };

    showOffer = () => {
        this.props.showOffer(this.props.offer.id);
    };

    favoriteOffer = (e) => {
        e.stopPropagation();
        this.props.favoriteOffer(this.props.offer.id);
    };

    unfavoriteOffer = (e) => {
        e.stopPropagation();
        this.props.unfavoriteOffer(this.props.offer.id);
    };
}

