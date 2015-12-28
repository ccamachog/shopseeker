import React from 'react';
import Map from '../common/map/Map';
import AppBar from 'material-ui/lib/app-bar';

export default class MapScreen extends React.Component {
    render() {
        return (
            <div style={{width:'360px'}}>
                <AppBar title="Title" iconClassNameRight="material-icons icon-search"/>
                <Map/>
            </div>
        );
    }
}