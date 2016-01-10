import React, {PropTypes} from 'react';
import shouldPureComponentUpdate from 'react-pure-render/function';
import Avatar from 'material-ui/lib/avatar';
import Card from 'material-ui/lib/card/card';
import CardActions from 'material-ui/lib/card/card-actions';
import CardMedia from 'material-ui/lib/card/card-media';
import CardTitle from 'material-ui/lib/card/card-title';
import CardHeader from 'material-ui/lib/card/card-header';
import FlatButton from 'material-ui/lib/flat-button';
import CardText from 'material-ui/lib/card/card-text';

import './MapPlace.scss';

export default class MapPlaceOfferCard extends React.Component {
    static propTypes = {
        text: PropTypes.string,
        render: PropTypes.bool
    };

    static defaultProps = {
        text:'cacota',
        render:true
    };

    shouldComponentUpdate = shouldPureComponentUpdate;

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="shopup-map-place-offer-card-container" style={{display:this.props.render?'block':'none'}}>
                <button onClick={this.props.onclose}>X</button>
                <Card>
                    <CardHeader
                        title="Special Offers!"
                        subtitle="Salud y Belleza"
                        avatar="http://lorempixel.com/100/100/nature/"/>
                    <CardText>
                        Oferta ejemplo
                    </CardText>
                </Card>
            </div>
        );
    }
}