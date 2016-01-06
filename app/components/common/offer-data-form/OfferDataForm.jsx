import React from 'react';
import List from 'material-ui/lib/lists/list';
import Divider from 'material-ui/lib/divider';
import ListItem from 'material-ui/lib/lists/list-item';

export default class OfferDataForm extends React.Component {
    render(){
        return (
            <div>
                <List>
                    <ListItem
                        primaryText="When calls and notifications arrive"
                        secondaryText="Always interrupt" />
                </List>
                <Divider />
                <List subheader="Priority interruptions">
                    <ListItem primaryText="Events and reminders" rightToggle={<Toggle />} />
                    <ListItem primaryText="Calls" rightToggle={<Toggle />} />
                    <ListItem primaryText="Messages" rightToggle={<Toggle />} />
                </List>
                <Divider />
                <List subheader="Hangout notifications">
                    <ListItem primaryText="Notifications" leftCheckbox={<Checkbox />} />
                    <ListItem primaryText="Sounds" leftCheckbox={<Checkbox />} />
                    <ListItem primaryText="Video sounds" leftCheckbox={<Checkbox />} />
                </List>
            </div>
        )
    }
}