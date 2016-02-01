import {Record} from 'immutable';
import {List} from 'immutable';
import PriceRangeRecord from './PriceRangeRecord';
import GeoRecord from './GeoRecord';
let OfferRecord = Record({
    id: -1,
    title: '',
    description: '',
    photos: new List(),
    price: new PriceRangeRecord(),
    tags: new List(),
    user: -1,
    rating: -1,
    favorite: false,
    geo: new GeoRecord()

});
export default OfferRecord;