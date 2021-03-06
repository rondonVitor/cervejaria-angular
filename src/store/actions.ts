import Beer from "../app/models/beer";
import BeerType from "src/app/models/beer-type";
import User from "src/app/models/user";

export const SIGNIN_USER = "SIGNIN_USER";
export const SIGNOUT_USER = "SIGNOUT_USER";

export const ADD_BEER = "ADD_BEER";
export const EDIT_BEER = "EDIT_BEER";
export const REMOVE_BEER = "REMOVE_BEER";

export const FETCH_BEERS_START = "FETCH_BEERS_START";
export const FETCH_BEERS_END = "FETCH_BEERS_END";

export const FETCH_BEER_TYPES_START = "FETCH_BEER_TYPES_START";
export const FETCH_BEER_TYPES_END = "FETCH_BEER_TYPES_END";

export function handleSignInUser(user: User) {
  return {
    type: SIGNIN_USER,
    user
  };
}

export function handleSignOutUser() {
  return {
    type: SIGNOUT_USER
  };
}

export function handleAddBeer(beer: Beer) {
  return {
    type: ADD_BEER,
    beer
  };
}

export function handleEditBeer(id: number, beer: Beer) {
  return {
    type: EDIT_BEER,
    id,
    beer
  };
}

export function handleRemoveBeer(id: number) {
  return {
    type: REMOVE_BEER,
    id
  };
}

export function handleFetchBeersStart() {
  return {
    type: FETCH_BEERS_START
  };
}

export function handleFetchBeersEnd(beers: Beer[]) {
  return {
    type: FETCH_BEER_TYPES_END,
    beers
  };
}

export function handleFetchBeerTypesStart() {
  return {
    type: FETCH_BEER_TYPES_START
  };
}

export function handleFetchBeerTypesEnd(beerTypes: BeerType[]) {
  return {
    type: FETCH_BEER_TYPES_END,
    beerTypes
  };
}
