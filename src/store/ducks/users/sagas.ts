import { call, put } from "redux-saga/effects";
import { loadSuccess, loadFailure } from "./actions";
import api from "../../../services/api";

export function* load() {
	try {
		const response = yield call(api.get, "users");

		yield put(loadSuccess(response.data));
	} catch (error) {
		yield put(loadFailure());
	}
}
