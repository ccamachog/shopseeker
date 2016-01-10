import {SHOW_OFFER} from '../actions/OffersAction';
import {List, Record} from 'immutable';
import TagRecord from '../types/TagRecord';
import OfferRecord from '../types/OfferRecord';
import PriceRangeRecord from '../types/PriceRangeRecord';

let offers = new List();
offers = offers.push(
    new OfferRecord({
        id: 1,
        name: 'Offer_1',
        description: 'Offer_1_desc',
        photos: new List(),
        price: new PriceRangeRecord({min: 0, max: 100}),
        tags: new List(),
        user: 1,
        rating: 3
    }),
    new OfferRecord({
        id: 2,
        name: 'Offer_2',
        description: 'Offer_2_desc',
        photos: new List(),
        price: new PriceRangeRecord({min: 50, max: 50}),
        tags: new List(),
        user: 1,
        rating: 3
    }));

export default function OfferReducer(state = new List(), action = '') {

    if (state.size <= 0)
        return offers;
    switch (action.type) {
        case SHOW_OFFER:
        {
            let offerIndex = state.findIndex(offer=>offer.id == action.id);
            if (offerIndex !== -1) {
                const offer = state.get(offerIndex);
                alert('Offer: ' + offer.description);
                return state;
            } else {
                return state;
            }
        }

        default:
            return state
    }
}