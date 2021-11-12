import { Dispatch } from "react";
import { AnimalAction, AnimalActionTypes } from "../../types/animal";
import axios from "axios";

export const fetchAnimals = () => {
    return async (dispatch: Dispatch<AnimalAction>) => {
        try {
            const response = await axios.get('http://localhost:5000/animals')
            dispatch({ type: AnimalActionTypes.FETCH_ANIMALS, payload: response.data })
        } catch (e) {
            dispatch({
                type: AnimalActionTypes.FETCH_ANIMALS_ERROR,
                payload: 'Произошла ошибка при загрузке животных'
            })
        }
    }
}

export const deleteAnimals = (_id) => ({
    type: 'DELETE_ANIMALS',
    payload: _id,
});