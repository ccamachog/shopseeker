import {Record} from 'immutable';
import {List} from 'immutable';
import PriceRangeRecord from './PriceRangeRecord';
let OfferRecord = Record({
    id: -1,
    title: '',
    description: '',
    photos: new List(),
    price: new PriceRangeRecord(),
    tags: new List(),
    user: -1,
    rating: -1,
    favorite: false
});
export default OfferRecord;