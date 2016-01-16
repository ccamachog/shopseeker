import React from 'react';
import AppBar from 'material-ui/lib/app-bar';
import List from 'material-ui/lib/lists/list';
import ListItem from 'material-ui/lib/lists/list-item';
import Divider from 'material-ui/lib/divider';
import Checkbox from 'material-ui/lib/checkbox';
import RadioButton from 'material-ui/lib/radio-button';
import RadioButtonGroup from 'material-ui/lib/radio-button-group';
import Slider from 'material-ui/lib/slider';
import TextField from 'material-ui/lib/text-field';
import DatePicker from 'material-ui/lib/date-picker/date-picker';
import DatePickerDialog from 'material-ui/lib/date-picker/date-picker-dialog';
import LocationRecord from '../../../types/LocationRecord';
import FilterRecord from '../../../types/FilterRecord';
import GeoRecord from '../../../types/GeoRecord';
import { connect } from 'react-redux';
import Paper from 'material-ui/lib/paper';
import distanceEnum from '../../../enum/distanceEnum';
import publishDateEnum from '../../../enum/publishDateEnum';
import FloatingActionButton from 'material-ui/lib/floating-action-button';
import Snackbar from 'material-ui/lib/snackbar';
import {updateFilter} from '../../../actions/FilterAction';
import './filterScreen.scss';


class FilterScreen extends React.Component {
    constructor(props) {
        super(props);
        this.filterRecord = new FilterRecord();
        this.defaultValueDistanceFilter = distanceEnum.FAR.TYPE.toString();
        this.defaultValueDateFilter = publishDateEnum.ANY_DATE.TYPE.toString();
        this.state = {
            showError:false
        };
    }

    componentDidMount(){
        this.initAutocomplete();
    }

    render() {
        return (
            <div className="shopup-filter-screen">
                <div className="filter-region">
                    <Paper className="paper" zDepth={1}>
                        <TextField  style={{width:'100%'}} className="inputSearch" floatingLabelText="Zona de búsqueda"/>
                    </Paper>
                </div>
                <div className="filter-region">
                    <Paper className="paper" zDepth={1}>
                        <div className="titleCategory">Categoria</div>
                        <Divider />
                        {this.props.tags.map((tag)=>(
                            <Checkbox key={tag.id} className="filterCheck"
                                name="checkboxName1" onCheck={this.handleChangeCategoryFilter.bind(this)}
                                value={tag.id.toString()}
                                label={tag.name}/>
                        ))}
                    </Paper>
                </div>
                <div className="filter-region">
                    <Paper className="paper" zDepth={1}>
                        <div className="titleCategory">Distancía</div>
                        <Divider />
                        <RadioButtonGroup name="distanceFilter" defaultSelected={this.defaultValueDistanceFilter} className="filterRadioGroup" onChange={this.handleChangeDistanceFilter.bind(this)}>
                            { Object.keys(distanceEnum).map((distanceConstant) => (
                                    <RadioButton className="filterRadio"
                                                 key={distanceEnum[distanceConstant].TYPE}
                                                 value={distanceEnum[distanceConstant].TYPE.toString()}
                                                 label={distanceEnum[distanceConstant].DESC} />
                            ))}

                        </RadioButtonGroup>
                    </Paper>
                </div>

                <div className="filter-region">
                    <Paper className="paper" zDepth={1}>
                        <div className="titleCategory">Fecha de publicación</div>
                        <Divider />
                        <RadioButtonGroup name="dateFilter" defaultSelected={this.defaultValueDateFilter} className="filterRadioGroup" onChange={this.handleChangeDateFilter.bind(this)}>
                            { Object.keys(publishDateEnum).map((publishDateConstant) => {
                                return  <RadioButton className="filterRadio"
                                             key={publishDateEnum[publishDateConstant].TYPE}
                                             value={publishDateEnum[publishDateConstant].TYPE.toString()}
                                             label={publishDateEnum[publishDateConstant].DESC} />
                            })}
                        </RadioButtonGroup>
                    </Paper>
                </div>
                {/*Other things*/}
                <div className="execute-filter-btn">
                    <FloatingActionButton iconClassName="material-icons icon-search" onTouchTap={this.applyFilter.bind(this)} />
                </div>
                <Snackbar
                    open={this.state.showError}
                    message="Location is required"
                    autoHideDuration={1000}
                    onRequestClose={this.handleRequestClose.bind(this)}
                    />
            </div>
        );
    }
    initAutocomplete() {

        const inputHTML = document.querySelectorAll('.inputSearch input')[0];
        inputHTML.setAttribute('placeholder','');
        this.autocomplete = new google.maps.places.Autocomplete(inputHTML, {types: ['geocode']});
        this.autocomplete.addListener('place_changed', this.placeChanged.bind(this));
    }
    placeChanged(){
        const place = this.autocomplete.getPlace();
        let locationRecord = new LocationRecord();

        var componentForm = {
            street_number: 'short_name',
            route: 'long_name',
            locality: 'long_name',
            administrative_area_level_1: 'short_name',
            country: 'long_name',
            postal_code: 'short_name'
        }
        // Get each component of the address from the place details
        // and fill the corresponding field on the form.
        for (let i = 0; i < place.address_components.length; i++) {
            var addressType = place.address_components[i].types[0];
            if (componentForm[addressType]) {
                let val = place.address_components[i][componentForm[addressType]];
                locationRecord=locationRecord.set(addressType,val);
            }
        }
        let geometry = new GeoRecord({
            lat: place.geometry.location.lat(),
            lng:place.geometry.location.lng()
        })

        locationRecord=locationRecord.set('geometry',geometry);
        this.filterRecord=this.filterRecord.set('location',locationRecord);
    }
    handleChangeCategoryFilter(event,isChecked) {
        if(isChecked){
            this.filterRecord = this.filterRecord.set('tags',this.filterRecord.tags.add(event.target.value));
        }else{
            this.filterRecord = this.filterRecord.set('tags',this.filterRecord.tags.delete(event.target.value));
        }

    }
    handleChangeDistanceFilter(event,value){
        this.filterRecord = this.filterRecord.set('distance',parseInt(value, 10));
    }
    handleChangeDateFilter(event,value) {
        this.filterRecord = this.filterRecord.set('date',parseInt(value, 10));
    }
    handleRequestClose(){
        this.setState({
            showError: false
        });
    }
    applyFilter(){
        if (this.filterRecord.location == null){
            this.setState({
                showError:true
            });
        }else{
            this.props.dispatch(updateFilter(this.filterRecord))
        }
    }

}
function select(state) {
    return {
        tags:state.tags
    }
}
export default connect(select)(FilterScreen)
