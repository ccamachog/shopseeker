import {Record} from 'immutable';
import {Set} from 'immutable';
import PriceRangeRecord from './PriceRangeRecord';
import LocationRecord from './LocationRecord';
const FilterRecord = Record({
    tags: new Set(),
    distance: -1,
    date: -1,
    price: new PriceRangeRecord(),
    rating: -1,
    location: null
});
export default FilterRecord;