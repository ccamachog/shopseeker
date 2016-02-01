import {SHOW_OFFER, FAV_OFFER, UNFAV_OFFER} from '../actions/OffersAction';
import {List, Record} from 'immutable';
import TagRecord from '../types/TagRecord';
import OfferRecord from '../types/OfferRecord';
import PriceRangeRecord from '../types/PriceRangeRecord';
import GeoRecord from '../types/GeoRecord';

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
        rating: 1,
        favorite: false,
        geo: new GeoRecord({lat: 40.3812351,lng: -3.7491920999999593})
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
        favorite: false,
        geo: new GeoRecord({lat: 40.41676289999999,lng: -3.7036379999999554})
    }),
    new OfferRecord({
        id: 3,
        title: 'Offer_3',
        description: 'Offer_3_desc',
        photos: new List(),
        price: new PriceRangeRecord({min: 0, max: 0}),
        tags: new List(),
        user: 2,
        rating: 3,
        favorite: true,
        geo: new GeoRecord({lat: 40.3256792,lng: -3.7683408999999983})
    }),
    new OfferRecord({
        id: 4,
        title: 'Offer_4',
        description: 'Offer_4_desc',
        photos: new List(),
        price: new PriceRangeRecord({min: 0, max: 100}),
        tags: new List(),
        user: 3,
        rating: 3,
        favorite: false,
        geo: new GeoRecord({lat: 39.45953799999999,lng: -5.880235699999957})
    })
);

let OffersStateRecord = Record({
    selected:null,
    list: offers
});

export default function OfferReducer(state = new OffersStateRecord(), action = '') {

    //if (state.offers.size <= 0)
    //    return offers;
    switch (action.type) {
        case SHOW_OFFER:
        {
            let offerIndex = state.list.findIndex(offer=>offer.id == action.id);

            if (offerIndex !== -1) {
                const offer = state.list.get(offerIndex);
                return state.set('selected',offer);
            } else {
                return state.set('selected',null);
            }
        }
        case FAV_OFFER:
        {
            let offerIndex = state.list.findIndex(offer=>offer.id == action.id);
            if (offerIndex !== -1) {
                return state.set('list',
                    state.list.update(offerIndex, (offer) => offer.set('favorite', true)));
            }else{
                return state;
            }
        }
        case UNFAV_OFFER:
        {
            let offerIndex = state.list.findIndex(offer=>offer.id == action.id);
            if (offerIndex !== -1) {
                return state.set('list',
                    state.list.update(offerIndex, (offer) => offer.set('favorite', false)));
            }else{
                return state;
            }
        }

        default:
            return state
    }
}