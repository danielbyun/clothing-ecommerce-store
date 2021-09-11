// effects from sagas that let us do different things

// listens to every action
import {takeLatest, call, all, put} from "redux-saga/effects";

import {FETCH_COLLECTIONS_START} from "../types";
import {
  firestore,
  convertCollectionsSnapshotToMap,
} from "../../Firebase/Firebase.utils";
import {
  fetchCollectionsSuccess,
  fetchCollectionsFailure,
} from "../actions/shopActions";

// async code generator fuction
export function* fetchCollectionsAsync() {
  try {
    const collectionRef = firestore.collection("collections");
    // instead of promise chains, we use generator function
    const snapshot = yield collectionRef.get();
    const collectionsMap = yield call(
      convertCollectionsSnapshotToMap,
      snapshot
    );
    yield put(fetchCollectionsSuccess(collectionsMap));
  } catch (error) {
    yield put(fetchCollectionsFailure(error));
  }

  // async fetch
  // collectionRef
  //   .get()
  //   .then(snapshot => {
  //     const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
  //     // dispatch the succcess call
  //     dispatch(fetchCollectionsSuccess(collectionsMap));
  //   })
  //   .catch(error => dispatch(fetchCollectionsFailure(error.message)));
}

// saga
export function* fetchCollectionsStart() {
  yield takeLatest(FETCH_COLLECTIONS_START, fetchCollectionsAsync);
}

export function* shopSagas() {
  yield all([call(fetchCollectionsStart)]);
}
