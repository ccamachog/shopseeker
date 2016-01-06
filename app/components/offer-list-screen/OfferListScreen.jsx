import React from 'react';
import OfferCard from './OfferCard.jsx';
import List from 'material-ui/lib/lists/list';
import ListItem from 'material-ui/lib/lists/list-item';


export default class OfferListScreen extends React.Component {
    render() {
        return (
            <List>
                <ListItem ><OfferCard/></ListItem>
                <ListItem ><OfferCard/></ListItem>
                <ListItem ><OfferCard/></ListItem>
                <ListItem ><OfferCard/></ListItem>
                <ListItem ><OfferCard/></ListItem>
            </List>
        );
    }
}