import React from 'react';
import AppBar from 'material-ui/lib/app-bar';
import Tabs from 'material-ui/lib/tabs/tabs';
import Tab from 'material-ui/lib/tabs/tab';
//import SwipeableViews from 'react-swipeable-views';
import Map from '../../common/map/Map';
import OfferListScreen from '../offer-list-screen/OfferListScreen';
import FilterScreen from './FilterScreen';
import {setHeaderState} from '../../../actions/HeaderStateAction';
import { connect } from 'react-redux';


const styles = {
    headline: {
        fontSize: 24,
        paddingTop: 16,
        marginBottom: 12,
        fontWeight: 400
    },
    slide: {
        padding: 0
    }
};
const TABS_ENUM ={
    LIST:0,
    MAP:1
}
class HubScreen extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
            slideIndex: TABS_ENUM.LIST
        };
        this.configStatusBar(this.state.slideIndex);

    }
    render() {
        return (
            <div style={{width:'100%',height:'320px'}}>
                <div style={{marginTop: '64px'}}>
                    <Tabs onChange={this.handleChange} value={this.state.slideIndex}>
                        {/*<Tab label="Filtrar" value={0}>
                            <FilterScreen/>
                        </Tab>*/}
                        <Tab label="Ofertas" value={TABS_ENUM.LIST}>
                            <OfferListScreen />
                        </Tab>
                        <Tab label="Map" value={TABS_ENUM.MAP}>
                            <Map/>
                        </Tab>
                    </Tabs>
                </div>
            </div>
        );
    }
    handleChange = (value) => {
        if (isNaN(value)){
            return;
        }
        this.setState({
            slideIndex: value
        });
        this.configStatusBar(value)
    };
    configStatusBar = (tabIndex) =>{
        let action,headerInfo;
        debugger;
        switch(tabIndex){
            case TABS_ENUM.LIST:
                headerInfo={
                    title:'List',
                    rightIconClass:'icon-search',
                    rightIconTouchHandler:()=>alert('hola')
                };
                action = setHeaderState(headerInfo);
                break;
            case TABS_ENUM.MAP:
                action = setHeaderState({title:'Map'});
                break;
        };

        this.props.dispatch(action);
    };

}

function select(state) {
    return {
    }
}
export default connect(select)(HubScreen)