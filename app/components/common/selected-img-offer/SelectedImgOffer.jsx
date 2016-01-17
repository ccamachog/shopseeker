import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import './SelectedImgOffer.scss';

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

export default class SelectedImgOffer extends React.Component {
    constructor(props) {
        super(props);
    }

    randomImgUrl = 'http://lorempixel.com/200/200';
     render() {
        const offer = this.props.offer;
        const gradientBg = 'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%,rgba(0,0,0,0.3) 70%,rgba(0,0,0,0) 100%)';

        return (
            <Card className="shopup-selected-img-offer" onClick={this.showOffer.bind(this)}>
                <CardHeader
                    title={offer.title}
                    subtitle={offer.price.min + ' - ' +offer.price.min}
                    avatar="http://lorempixel.com/100/100/"/>
                <CardMedia className="images">
                    <img src={this.randomImgUrl}/>
                </CardMedia>
                <CardText>
                    {offer.description}
                </CardText>
            </Card>
        );
    };

    showOffer = () => {
        this.props.showOffer(-1);
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

