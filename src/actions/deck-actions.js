import { ADD_CARD, FETCH_DECKS, SAVE_TEST } from './types';

import { apiGetDecks, apiSaveTitle } from '../utils/api';

export function appStartFetchDecks() {
  return dispatch => {
    apiGetDecks().then((decks) => {
      dispatch({
        type: FETCH_DECKS,
        payload: decks
      })
    })
  }
}

export function appSaveTitle(deck) {
  return {
    type: SAVE_TEST,
    payload: deck
  }
}

export function addCard(value) {
  return {
    type: ADD_CARD,
    payload: value
  }
}