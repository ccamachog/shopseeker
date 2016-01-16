import React from 'react';
import './ImgOffer.scss';

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

import Paper from 'material-ui/lib/paper';

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
        //const gradientBg = 'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%,rgba(0,0,0,0.3) 70%,rgba(0,0,0,0) 100%)';

        return (
            <Paper
                className={'shopup-img-offer ' + (offer.rating >= 4 ? 'important' : 'normal') }
                id="juan"
                onClick={this.showOffer.bind(this)}
                zDepth={1}
                rounded={true}
                style={{backgroundImage:'url("http://lorempixel.com/200/200") !important' }}
            >
                <img className="image" src="http://lorempixel.com/200/200"/>

                <span className="title">{offer.title}</span>
                <span className="price">{offer.price.min + ' - ' +offer.price.min}</span>
                <Avatar className="avatar" src="http://lorempixel.com/100/100/" />
                <div className="fav-icon">
                    {offer.favorite?
                    <IconButton onClick={this.unfavoriteOffer.bind(this)}> <Favorite
                        color="white"/></IconButton>:
                    <IconButton onClick={this.favoriteOffer.bind(this)}><FavoriteBorder
                        color="white"/></IconButton>}
                </div>
                <span className="description">
                    {offer.description}' Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining '
                </span>
            </Paper>
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

