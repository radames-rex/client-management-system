import { action } from "typesafe-actions";

import { UsersTypes, User } from "./types";

export const userListRequest = () => action(UsersTypes.REQUEST_USER_LIST);
export const userListSuccess = (data: User[]) =>
	action(UsersTypes.SUCCESS_USER_LIST, { data });
export const userListFailure = () => action(UsersTypes.FAILURE_USER_LIST);

export const userShowRequest = (data: any) => action(UsersTypes.REQUEST_USER_GET, data);
export const userShowSuccess = (data: User[]) =>
	action(UsersTypes.SUCCESS_USER_GET, { data });
export const userShowFailure = () => action(UsersTypes.FAILURE_USER_GET);

export const userCreateRequest = (data: any) => action(UsersTypes.REQUEST_USER_CREATE, data);
export const userCreateSuccess = (data: User[]) =>
	action(UsersTypes.SUCCESS_USER_CREATE, { data });
export const userCreateFailure = () => action(UsersTypes.FAILURE_USER_CREATE);

export const userUpdateRequest = (data: any) => action(UsersTypes.REQUEST_USER_UPDATE, data);
export const userUpdateSuccess = (data: User[]) =>
	action(UsersTypes.SUCCESS_USER_UPDATE, { data });
export const userUpdateFailure = () => action(UsersTypes.FAILURE_USER_UPDATE);

export const userDestroyRequest = (data: any) => action(UsersTypes.REQUEST_USER_DELETE, data);
export const userDestroySuccess = (data: User[]) =>
	action(UsersTypes.SUCCESS_USER_DELETE, { data });
export const userDestroyFailure = () => action(UsersTypes.FAILURE_USER_DELETE);
