// Action Types
export enum UsersTypes {
	"LOAD_REQUEST" = "@users/LOAD_REQUEST",
	"LOAD_SUCCESS" = "@users/LOAD_SUCCESS",
	"LOAD_FAILURE" = "@users/LOAD_FAILURE"
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
