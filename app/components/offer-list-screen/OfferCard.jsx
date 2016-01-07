import React from 'react';
import Avatar from 'material-ui/lib/avatar';
import Card from 'material-ui/lib/card/card';
import CardActions from 'material-ui/lib/card/card-actions';
import CardHeader from 'material-ui/lib/card/card-header';
import CardMedia from 'material-ui/lib/card/card-media';
import CardTitle from 'material-ui/lib/card/card-title';
import FlatButton from 'material-ui/lib/flat-button';
import CardText from 'material-ui/lib/card/card-text';

export default class OfferCard extends React.Component {
    render() {
        return (
            <Card>
                <CardHeader
                    title="Special Offers!"
                    subtitle="Salud y Belleza"
                    avatar="http://lorempixel.com/100/100/nature/"/>
                <CardMedia>
                    <img src="http://sharmscubaservice.com/wp-content/uploads/2015/03/Special_Offers2.jpg"/>
                </CardMedia>

                <CardText>
                    Oferta especial
                </CardText>
            </Card>
        );
    }
}