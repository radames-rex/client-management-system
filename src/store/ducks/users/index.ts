import { Reducer } from "redux";

import { UsersState, UsersTypes } from "./types";

const INITIAL_STATE: UsersState = {
	data: [],
	error: false,
	loading: false
};

const reducer: Reducer<UsersState> = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case UsersTypes.REQUEST_USER_LIST:
			return { ...state, loading: true };
		case UsersTypes.SUCCESS_USER_LIST:
			return {
				...state,
				loading: false,
				error: false,
				data: action.payload.data
			};
		case UsersTypes.FAILURE_USER_LIST:
			return { ...state, loading: false, error: true, data: [] };
		case UsersTypes.REQUEST_USER_GET:
			return { ...state, loading: true };
		case UsersTypes.SUCCESS_USER_GET:
			return {
				...state,
				loading: false,
				error: false,
				data: action.payload.data
			};
		case UsersTypes.FAILURE_USER_GET:
			return { ...state, loading: false, error: true, data: [] };
		case UsersTypes.REQUEST_USER_CREATE:
			return { ...state, loading: true };
		case UsersTypes.SUCCESS_USER_CREATE:
			return {
				...state,
				loading: false,
				error: false,
				data: action.payload.data
			};
		case UsersTypes.FAILURE_USER_CREATE:
			return { ...state, loading: false, error: true, data: [] };
		case UsersTypes.REQUEST_USER_UPDATE:
			return { ...state, loading: true };
		case UsersTypes.SUCCESS_USER_UPDATE:
			return {
				...state,
				loading: false,
				error: false,
				data: action.payload.data
			};
		case UsersTypes.FAILURE_USER_UPDATE:
			return { ...state, loading: false, error: true, data: [] };
		case UsersTypes.REQUEST_USER_DELETE:
			return { ...state, loading: true };
		case UsersTypes.SUCCESS_USER_DELETE:
			return {
				...state,
				loading: false,
				error: false,
				data: action.payload.data
			};
		case UsersTypes.FAILURE_USER_DELETE:
			return { ...state, loading: false, error: true, data: [] };
		default:
			return state;
	}
};

export default reducer;
