import { UsersTypes } from "./users/types";
import { all, takeLatest } from "redux-saga/effects";

import { load } from "./users/sagas";

export default function* rootSaga() {
	return yield all([takeLatest(UsersTypes.LOAD_REQUEST, load)]);
}
