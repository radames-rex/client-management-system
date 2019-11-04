import { all, call, put, select, takeLatest } from "redux-saga/effects";

import {
	userListSuccess,
	userListFailure,
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

function* createUser(action: any) {
	try {
		const response = yield call(apiSave, action.payload.user);
		let users = yield select(state => state.users.data);
		users.push(response.data);
		yield put(userCreateSuccess(users));
	} catch (error) {
		console.log(error);
		yield put(userCreateFailure());
	}
}

function* updateUser(action: any) {
	try {
		const response = yield call(apiUpdate, action.payload.user);
		let users = yield select(state => state.users.data);
		users = users.map((user: any) => {
			if (user.id === action.payload.user.id) user = response.data;
			return user;
		});
		yield put(userUpdateSuccess(users));
	} catch (error) {
		console.log(error);
		yield put(userUpdateFailure());
	}
}

function* deleteUser(action: any) {
	try {
		yield call(apiDelete, action.payload.id);
		let users = yield select(state => state.users.data);
		users = users.filter((user: any) => {
			if (user.id !== action.payload.id) return user;
		});
		yield put(userDestroySuccess(users));
	} catch (error) {
		console.log(error);
		yield put(userDestroyFailure());
	}
}

export default function* root() {
	yield all([
		takeLatest(UsersTypes.REQUEST_USER_LIST, getUserList),
		takeLatest(UsersTypes.REQUEST_USER_CREATE, createUser),
		takeLatest(UsersTypes.REQUEST_USER_UPDATE, updateUser),
		takeLatest(UsersTypes.REQUEST_USER_DELETE, deleteUser)
	]);
}
