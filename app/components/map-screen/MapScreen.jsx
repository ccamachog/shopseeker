import React from 'react';
import Map from '../common/map/Map';
import Header from '../common/header/Header';

export default class MapScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false
        }
    }

    render() {
        return (
            <div style={{width:'360px'}}>
                <Header title="Map Screen" />
                <Map/>
            </div>
        );
    }


    }
