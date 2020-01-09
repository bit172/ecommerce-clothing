import ShopActionTypes from "./shop.types";

import {
  firestore,
  convertCollectionsSnapShotToMap
} from "../../firebase/firebase.utils";

export const fetchCollectionsStart = collectionsMap => ({
  type: ShopActionTypes.FETCH_COLLECTIONS_START
});

export const fetchCollectionsFailure = errorMessage => ({
  type: ShopActionTypes.FETCH_COLLECTIONS_FAILURE,
  payload: errorMessage
});

export const fetchCollectionsSuccess = collectionsMap => ({
  type: ShopActionTypes.FETCH_COLLECTIONS_SUCCESS,
  payload: collectionsMap
});

export const fetchCollectionsStartAsync = () => {
  return dispatch => {
    const collectionRef = firestore.collection("collections");
    // this is allowed because of redux-thunk
    dispatch(fetchCollectionsStart());

    // changed to promise instead of observable pattern
    collectionRef
      .get()
      .then(snapShot => {
        const collectionsMap = convertCollectionsSnapShotToMap(snapShot);
        dispatch(fetchCollectionsSuccess(collectionsMap));
      })
      .catch(error => dispatch(fetchCollectionsFailure(error.message)));
  };
};
