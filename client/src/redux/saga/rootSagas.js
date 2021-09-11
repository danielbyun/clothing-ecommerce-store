// run multiple sagas
import {all, call} from "redux-saga/effects";
import {fetchCollectionsStart, shopSagas} from "./shopSagas";
import {userSagas} from "./userSagas";
import {cartSagas} from "./cartSagas";

export default function* rootSagas() {
  yield all([
    call(fetchCollectionsStart),
    call(userSagas),
    call(cartSagas),
    call(shopSagas),
  ]);
}
