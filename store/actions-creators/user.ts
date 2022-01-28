

import { Dispatch } from "react";
import { UserAction, UserActionTypes } from "../../types/user";
import axios from "axios";

export const fetchUser = () => {
	return async (dispatch: Dispatch<UserAction>) => {
		try {
			const response = await axios.get('http://localhost:5000/login', {})
			dispatch({
				type: UserActionTypes.FETCH_USERS,
				payload: response.data
			})
		} catch (e) {
			dispatch({
				type: UserActionTypes.FETCH_USERS_ERROR,
				payload: 'Произошла ошибка при получении информации о пользователе'
			})
		}
	}
}