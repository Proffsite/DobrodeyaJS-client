// import {ITrack} from "./animal";

import { ResponseUser } from '../utils/api/types';

// export interface PlayerState {
//     active: null | ITrack;
//     volume: number;
//     duration: number;
//     currentTime: number;
//     pause: boolean;
// }

export enum UserRoles {
	ADMIN = 'admin',
	USER = 'user',
}

// export interface UserState {
// 	users: IUser[];
// 	error: string;
// }

export enum UserActionTypes {
	SET_USERS_DATA = 'SET_USERS_DATA',
	FETCH_USERS_ERROR = 'FETCH_USERS_ERROR'
}

interface FetchUsersAction {
	type: UserActionTypes.SET_USERS_DATA;
	payload: ResponseUser;
}

interface FetchUsersErrorAction {
	type: UserActionTypes.FETCH_USERS_ERROR;
	payload: string
}

export type UserAction = FetchUsersAction | FetchUsersErrorAction

// export enum PlayerActionTypes {
//     PLAY = "PLAY",
//     PAUSE = "PAUSE",
//     SET_ACTIVE = "SET_ACTIVE",
//     SET_DURATION = "SET_DURATION",
//     SET_CURRENT_TIME = "SET_CURRENT_TIME",
//     SET_VOLUME = "SET_VOLUME",
// }

// interface PlayAction {
//     type: PlayerActionTypes.PLAY
// }
// interface PauseAction {
//     type: PlayerActionTypes.PAUSE
// }
// interface SetActiveAction {
//     type: PlayerActionTypes.SET_ACTIVE,
//     payload: ITrack;
// }
// interface SetDurationAction {
//     type: PlayerActionTypes.SET_DURATION,
//     payload: number;
// }
// interface SetVolumeAction {
//     type: PlayerActionTypes.SET_VOLUME,
//     payload: number;
// }
// interface SetCurrentTimeAction {
//     type: PlayerActionTypes.SET_CURRENT_TIME,
//     payload: number;
// }

// export type PlayerAction =
//     PlayAction
//     | PauseAction
//     | SetActiveAction
//     | SetDurationAction
//     | SetVolumeAction
//     | SetCurrentTimeAction
