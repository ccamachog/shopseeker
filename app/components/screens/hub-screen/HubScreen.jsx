import React from 'react';
import AppBar from 'material-ui/lib/app-bar';
import Tabs from 'material-ui/lib/tabs/tabs';
import Tab from 'material-ui/lib/tabs/tab';
//import SwipeableViews from 'react-swipeable-views';
import Map from '../../common/map/Map';
import OfferListScreen from '../offer-list-screen/OfferListScreen.jsx';
import FilterScreen from '../filter-screen/FilterScreen';
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
};
class HubScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            slideIndex: TABS_ENUM.LIST,
            showFilterScreen: false
        };
        this.configStatusBarForTabs();

    }
    render() {
        return (
            <div style={{width:'100%',height:'320px'}}>
                {this.state.showFilterScreen ? <FilterScreen/> : this.paintTabs()}
            </div>
        );
    }
    paintTabs = () => {
        return (
            <Tabs onChange={this.handleChange} value={this.state.slideIndex}>
                <Tab label="Ofertas" value={TABS_ENUM.LIST}>
                    <OfferListScreen />
                </Tab>
                <Tab label="Map" value={TABS_ENUM.MAP}>
                    <Map offerList={this.props.offerList}/>
                </Tab>
            </Tabs>
        );
    };
    handleChange = (value) => {
        if (isNaN(value)){
            return;
        }
        this.setState({
            slideIndex: value
        });
        this.setStatusBarTitle(value);
    };
    showFilterScreen(){
        this.setState({
            showFilterScreen: true
        });
        this.configStatusBarForFilter();

    }
    showTabScreen(){
        this.setState({
            showFilterScreen: false
        });
        this.configStatusBarForTabs();
    }

    configStatusBarForTabs = () => {
        let action,
        headerInfo={
            title:'List',
            rightIconClass:'material-icons icon-search',
            rightIconTouchHandler:this.showFilterScreen.bind(this)
        };
        action = setHeaderState(headerInfo);
        this.props.dispatch(action);
    };
    configStatusBarForFilter = () => {
        let action,
            headerInfo={
                title:'Filter',
                leftIconClass:'material-icons icon-arrow-back',
                leftIconTouchHandler:this.showTabScreen.bind(this)
            };
        action = setHeaderState(headerInfo);
        this.props.dispatch(action);
    };
    setStatusBarTitle = (tabIndex) =>{
        let action,headerInfo={};
        switch(tabIndex){
            case TABS_ENUM.LIST:
                headerInfo.title = 'List';
                break;
            case TABS_ENUM.MAP:
                headerInfo.title = 'Map';
                break;
        }
        action = setHeaderState(headerInfo,false);
        this.props.dispatch(action);
    };

}

function select(state) {
    return {
        offerList: state.offers.list.toArray()
    }
}
export default connect(select)(HubScreen)