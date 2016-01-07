import React from 'react';
import AppBar from 'material-ui/lib/app-bar';
import List from 'material-ui/lib/lists/list';
import ListItem from 'material-ui/lib/lists/list-item';
import Divider from 'material-ui/lib/divider';
import Checkbox from 'material-ui/lib/checkbox';
import Slider from 'material-ui/lib/slider';
import TextField from 'material-ui/lib/text-field';
import DatePicker from 'material-ui/lib/date-picker/date-picker';
import DatePickerDialog from 'material-ui/lib/date-picker/date-picker-dialog';
import './filterScreen.scss';

export default class FilterScreen extends React.Component {
    constructor(props) {
        super(props);
    }

    handleChange = (event) => {


    };
    render() {
        return (
            <div className="shopup-filter-screen">
                <List subheader="Categorias">
                    <ListItem
                        leftCheckbox={<Checkbox onCheck={this.handleChange}/>}
                        primaryText="Salud y Belleza" disabled={false}/>
                    <ListItem
                        leftCheckbox={<Checkbox />}
                        primaryText="Comer y Beber" disabled={false}/>
                    <ListItem
                        leftCheckbox={<Checkbox />}
                        primaryText="Ocio y deporte" disabled={false}/>
                </List>
                <Divider />

                <div>
                    <div className="titleCategory">Distancia</div>
                    <div>
                        <Slider name="slider2" defaultValue={100} step={100} min={100} max={1000} className="slider"/>
                        <TextField defaultValue="100" className="slider-text"/>
                    </div>
                </div>
                <Divider />

                <div>
                    <div className="titleCategory">Rango de fecha</div>
                    <div style={{marginTop: '-35px'}}>
                        <DatePicker floatingLabelText="From" autoOk={true}
                                    style={{display:'inline-block',width:'40%',padding:'16px',paddingTop:'0px'}}
                                    textFieldStyle={{width:'100%'}}/>
                        <DatePicker floatingLabelText="To" autoOk={true}
                                    style={{display:'inline-block',width:'40%',padding:'16px',paddingTop:'0px'}}
                                    textFieldStyle={{width:'100%'}}/>

                    </div>
                </div>
            </div>
        );
    }
}
/*
 <List subheader="General">
 <ListItem
 primaryText="Profile photo"
 secondaryText="Change your Google+ profile photo" />
 <ListItem
 primaryText="Show your status"
 secondaryText="Your status is visible to everyone you use with" />
 </List>*/