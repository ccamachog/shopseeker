import React from 'react';
import AppBar from 'material-ui/lib/app-bar';
import Tabs from 'material-ui/lib/tabs/tabs';
import Tab from 'material-ui/lib/tabs/tab';
//import SwipeableViews from 'react-swipeable-views';
import Map from '../common/map/Map';
import OfferListScreen from '../offer-list-screen/OfferListScreen';
import FilterScreen from '../filter-screen/FilterScreen';


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
export default class HubScreen extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
            slideIndex: 1
        };
    }

    handleChange = (value) => {
        if (isNaN(value)){
            return;
        }
        this.setState({
            slideIndex: value
        });
    };
    render() {
        return (
            <div style={{width:'100%',height:'320px'}}>

                <div style={{position: 'fixed',zIndex: 1000,width: '100%',top:0,left:0}}>
                    <AppBar title="40 de  636 Ofertas" iconClassNameRight="material-icons icon-search"
                            iconClassNameLeft="material-icons icon-arrow-back"/>
                </div>
                <div style={{    marginTop: '64px'}}>
                    <Tabs onChange={this.handleChange} value={this.state.slideIndex}>
                        <Tab label="Filtrar" value={0}>
                            <FilterScreen/>
                        </Tab>
                        <Tab label="Ofertas" value={1}>
                            <OfferListScreen />
                        </Tab>
                        <Tab label="Map" value={2}>
                            <Map/>
                        </Tab>
                    </Tabs>
                </div>

            </div>
        );
    }
}
/*
 <div style={{paddingTop:'112px'}}>
 <SwipeableViews
 index={this.state.slideIndex}
 onChangeIndex={this.handleChange}
 >
 <div>
 <OfferListScreen/>
 </div>
 <div style={styles.slide}>
 <Map/>
 </div>
 <div style={styles.slide}>
 <FilterScreen/>
 </div>
 </SwipeableViews>
 </div>
 */