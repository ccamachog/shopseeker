import React, {PropTypes} from 'react';
import shouldPureComponentUpdate from 'react-pure-render/function';

//import {greatPlaceStyle} from './my_great_place_styles.js';
import './MapPlace.scss';

export default class MapPlace extends React.Component {
    static propTypes = {
        text: PropTypes.string
    };

    static defaultProps = {};

    shouldComponentUpdate = shouldPureComponentUpdate;

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="shopup-map-place">
                {this.props.text}
            </div>
        );
    }
}