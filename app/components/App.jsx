import React from 'react';
import Lanes from './Lanes.jsx';
import LaneRecord from '../types/LaneRecord';
import {create as createLane} from '../actions/LaneActions';
import { connect } from 'react-redux';
import uuid from 'node-uuid';

class App extends React.Component {
    render() {

        const { dispatch, lanes } = this.props;

        return (
            <div>
                <button className="add-lane" onClick={this.addItem.bind(this)}>+</button>
                <Lanes items={lanes}/>
            </div>
        );
    }

    addItem() {
        this.props.dispatch(createLane(new LaneRecord({
            name: 'New lane',
            id: uuid.v4()
        })));
    }
}

// Which props do we want to inject, given the global state?
// Note: use https://github.com/faassen/reselect for better performance.
function select(state) {
    return {
        lanes: state.lanes
    }
}

// Wrap the component to inject dispatch and state into it
export default connect(select)(App)

