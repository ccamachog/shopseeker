import {Record} from 'immutable';
import GeoRecord from './GeoRecord';
const LocationRecord = Record({
    street_number: '',
    route: '',
    locality: '',
    administrative_area_level_1: '',
    country: '',
    postal_code: '',
    geometry: new GeoRecord()
});
export default LocationRecord;

//place.geometry.location.lng()