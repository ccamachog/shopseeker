import React from 'react';
import Avatar from 'material-ui/lib/avatar';
import Card from 'material-ui/lib/card/card';
import CardActions from 'material-ui/lib/card/card-actions';
import CardHeader from 'material-ui/lib/card/card-header';
import CardMedia from 'material-ui/lib/card/card-media';
import CardTitle from 'material-ui/lib/card/card-title';
import FlatButton from 'material-ui/lib/flat-button';
import CardText from 'material-ui/lib/card/card-text';

const CardExampleWithAvatar = () => (
    <Card>
        <CardHeader
            title="Demo Url Based Avatar"
            subtitle="Subtitle"
            avatar="http://lorempixel.com/100/100/nature/"/>
        <CardMedia>
            <img src="http://lorempixel.com/600/337/nature/"/>
        </CardMedia>

        <CardText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
            Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
            Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
        </CardText>
        <CardActions>
            <FlatButton label="Action1"/>
            <FlatButton label="Action2"/>
        </CardActions>
    </Card>
);

export default CardExampleWithAvatar;



export default class OfferCard extends React.Component {
    render() {
        return (<div className="offer-list-screen">
            ~OfferListScreen~
            {/*<flat-header />
             <img-offer-list />
             <float-footer />*/}
        </div>);
    }
}