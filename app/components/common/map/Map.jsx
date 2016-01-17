import React, {PropTypes} from 'react';
import shouldPureComponentUpdate from 'react-pure-render/function';

import GoogleMap from 'google-map-react';
import MapPlace from './MapPlace';

export default class Map extends React.Component {
    static defaultProps = {
        center: {lat: 59.938043, lng: 30.337157},
        zoom: 9,
        greatPlaceCoords: {lat: 59.724465, lng: 30.080121}
    };

    shouldComponentUpdate = shouldPureComponentUpdate;

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div style={{width:'100%',height:'320px'}}>
                <GoogleMap
                    bootstrapURLKeys={{key:'AIzaSyBAMklnkK2wzDczW686Kur06s6lczlBA1s',signed_in:true,libraries:'places'}}
                    defaultCenter={this.props.center}
                    defaultZoom={this.props.zoom}>
                    <MapPlace lat={59.955413} lng={30.337844} text={'A'} /* Kreyser Avrora */ />
                    <MapPlace   {...this.props.greatPlaceCoords} text={'B'} /* road circle */ />
                </GoogleMap>
            </div>
        );
    }
}