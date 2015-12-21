import {Record} from 'immutable';
import {List} from 'immutable';
import GeoRecord from 'GeoRecord';
let ShopRecord = Record({
    id: -1,
    name: '',
    offers: new List(),
    geo_position: new GeoRecord(),
    url: ''
});
export default ShopRecord;