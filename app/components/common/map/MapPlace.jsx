import React, {PropTypes} from 'react';
import shouldPureComponentUpdate from 'react-pure-render/function';
import MapPlaceOfferCard from './MapPlaceOfferCard.jsx';

//import {greatPlaceStyle} from './my_great_place_styles.js';
import './MapPlace.scss';

export default class MapPlace extends React.Component {
    static propTypes = {
        //text: PropTypes.string
    };

    static defaultProps = {};

    shouldComponentUpdate = shouldPureComponentUpdate;

    constructor(props) {
        super(props);
        this.state={
            render:false
        }
    }
    handleOpenMapPlaceOffer = (value) => {
        this.setState({
            render:true
        })
    };
    handleCloseMapPlaceOffer = (value) => {
        this.setState({
            render:false
        })
    };
    render() {
        return (
            <div className="shopup-map-place-container">
                <div className="shopup-map-place-circle" onClick={this.handleOpenMapPlaceOffer}>
                    <span className="material-icons icon-tag shopup-map-place-content"></span>
                </div>
                <MapPlaceOfferCard render={this.state.render} onclose={this.handleCloseMapPlaceOffer}/>
            </div>
        );
    }
}