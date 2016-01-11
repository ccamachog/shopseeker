import {SHOW_OFFER, FAV_OFFER, UNFAV_OFFER} from '../actions/OffersAction';
import {List, Record} from 'immutable';
import TagRecord from '../types/TagRecord';
import OfferRecord from '../types/OfferRecord';
import PriceRangeRecord from '../types/PriceRangeRecord';

let offers = new List();
offers = offers.push(
    new OfferRecord({
        id: 1,
        title: 'Offer_1',
        description: 'Offer_1_desc',
        photos: new List(),
        price: new PriceRangeRecord({min: 0, max: 100}),
        tags: new List(),
        user: 1,
        rating: 3,
        favorite: false
    }),
    new OfferRecord({
        id: 2,
        title: 'Offer_2',
        description: 'Offer_2_desc',
        photos: new List(),
        price: new PriceRangeRecord({min: 50, max: 50}),
        tags: new List(),
        user: 1,
        rating: 5,
        favorite: false
    }),
    new OfferRecord({
        id: 3,
        title: 'Offer_3',
        description: 'Offer_3_desc',
        photos: new List(),
        price: new PriceRangeRecord({min: 0, max: 0}),
        tags: new List(),
        user: 1,
        rating: 3,
        favorite: true
    }),
    new OfferRecord({
        id: 4,
        title: 'Offer_4',
        description: 'Offer_4_desc',
        photos: new List(),
        price: new PriceRangeRecord({min: 0, max: 100}),
        tags: new List(),
        user: 1,
        rating: 3,
        favorite: false
    })
);

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
        case FAV_OFFER:
        {
            let offerIndex = state.findIndex(offer=>offer.id == action.id);
            if (offerIndex !== -1) {
                return state.update(offerIndex, (offer) => offer.set('favorite', true));
            }else{
                return state;
            }
        }
        case UNFAV_OFFER:
        {
            let offerIndex = state.findIndex(offer=>offer.id == action.id);
            if (offerIndex !== -1) {
                return state.update(offerIndex, (offer) => offer.set('favorite', false));
            }else{
                return state;
            }
        }

        default:
            return state
    }
}