import React, {PropTypes} from 'react';
import shouldPureComponentUpdate from 'react-pure-render/function';

import GoogleMap from 'google-map-react';
import MapPlace from './MapPlace';

export default class Map extends React.Component {
    static defaultProps = {

        center: {lat: 40.41676289999999,lng: -3.7036379999999554},
        zoom: 9,
        offerList: []
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
                    {

                        this.props.offerList.map((offer)=><MapPlace key={offer.id} lat={offer.geo.lat} lng={offer.geo.lng}  />)
                    }
                </GoogleMap>

            </div>
        );
    }
}