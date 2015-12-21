import {Record} from 'immutable';
import {List} from 'immutable';
import PriceRangeRecord from 'PriceRangeRecord';
let OfferRecord = Record({
    id: -1,
    tags: new List(),
    distance: '',
    date: -1,
    price: new PriceRangeRecord(),
    rating: -1,
    filter_text: ''

});
export default OfferRecord;