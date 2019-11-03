// Action Types
export enum UsersTypes {
	"REQUEST_USER_LIST" = "@users/REQUEST_USER_LIST",
	"SUCCESS_USER_LIST" = "@users/SUCCESS_USER_LIST",
	"FAILURE_USER_LIST" = "@users/FAILURE_USER_LIST",
	"REQUEST_USER_GET" = "@users/REQUEST_USER_GET",
	"SUCCESS_USER_GET" = "@users/SUCCESS_USER_GET",
	"FAILURE_USER_GET" = "@users/FAILURE_USER_GET",
	"REQUEST_USER_CREATE" = "@users/REQUEST_USER_CREATE",
	"SUCCESS_USER_CREATE" = "@users/SUCCESS_USER_CREATE",
	"FAILURE_USER_CREATE" = "@users/FAILURE_USER_CREATE",
	"REQUEST_USER_UPDATE" = "@users/REQUEST_USER_UPDATE",
	"SUCCESS_USER_UPDATE" = "@users/SUCCESS_USER_UPDATE",
	"FAILURE_USER_UPDATE" = "@users/FAILURE_USER_UPDATE",
	"REQUEST_USER_DELETE" = "@users/REQUEST_USER_DELETE",
	"SUCCESS_USER_DELETE" = "@users/SUCCESS_USER_DELETE",
	"FAILURE_USER_DELETE" = "@users/FAILURE_USER_DELETE",
}

// Data Types
export interface User {
	id: number;
	name: string;
	email: string;
	cpf: string;
	phone: string;
}

// State Types
export interface UsersState {
	readonly data: User[];
	readonly loading: boolean;
	readonly error: boolean;
}
