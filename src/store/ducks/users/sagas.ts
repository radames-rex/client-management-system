import { all, call, put, takeLatest } from "redux-saga/effects";

import {
	userListSuccess,
	userListFailure,
	userShowSuccess,
	userShowFailure,
	userCreateSuccess,
	userCreateFailure,
	userUpdateSuccess,
	userUpdateFailure,
	userDestroySuccess,
	userDestroyFailure
} from "./actions";
import { UsersTypes } from "./types";
import UserService from "../../../services/UserService";

const userService = new UserService();

function apiGet(id: Number) {
	return userService.show(id);
}

function apiList() {
	return userService.index();
}

function apiSave(user: any) {
	return userService.create(user);
}

function apiUpdate(user: any) {
	return userService.update(user);
}

function apiDelete(id: Number) {
	return userService.destroy(id);
}

function* getUserList() {
	try {
		const response = yield call(apiList);
		yield put(userListSuccess(response.data));
	} catch (error) {
		console.log(error);
		yield put(userListFailure());
	}
}

function* getUser(action: any) {
	try {
		const response = yield call(apiGet, action.payload.id);
		yield put(userShowSuccess(response.data));
	} catch (error) {
		console.log(error);
		yield put(userShowFailure());
	}
}

function* createUser(action: any) {
	try {
		let response = yield call(apiSave, action.payload.user);
		yield put(userCreateSuccess(response.data));
	} catch (error) {
		console.log(error);
		yield put(userCreateFailure());
	}
}

function* updateUser(action: any) {
	try {
		let response = yield call(apiUpdate, action.payload.user);
		yield put(userUpdateSuccess(response.data));
	} catch (error) {
		console.log(error);
		yield put(userUpdateFailure());
	}
}

function* deleteUser(action: any) {
	try {
		let response = yield call(apiDelete, action.payload.id);
		yield put(userDestroySuccess(response.data));
	} catch (error) {
		console.log(error);
		yield put(userDestroyFailure());
	}
}

export default function* root() {
	yield all([
		takeLatest(UsersTypes.REQUEST_USER_LIST, getUserList),
		takeLatest(UsersTypes.REQUEST_USER_GET, getUser),
		takeLatest(UsersTypes.REQUEST_USER_CREATE, createUser),
		takeLatest(UsersTypes.REQUEST_USER_UPDATE, updateUser),
		takeLatest(UsersTypes.REQUEST_USER_DELETE, deleteUser)
	]);
}
