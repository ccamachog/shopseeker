export const SHOW_OFFER = 'SHOW_OFFER';
export const FAV_OFFER = 'FAV_OFFER';
export const UNFAV_OFFER = 'UNFAV_OFFER';

export function showOffer(id) {
    return {type: SHOW_OFFER, id}
}

export function favoriteOffer(id) {
    return {type: FAV_OFFER, id}
}

export function unfavoriteOffer(id) {
    return {type: UNFAV_OFFER, id}
}