
export interface IAnimal {
    _id: string;
    name: string;
    age: string;
    text: string;
    date: number;
    picture: string;
    sex: string;
}

export interface AnimalState {
    animals: IAnimal[];
    error: string;
}

export enum AnimalActionTypes {
    FETCH_ANIMALS = 'FETCH_ANIMALS',
    FETCH_ANIMALS_ERROR = 'FETCH_ANIMALS_ERROR',
    DELETE_ANIMALS = 'DELETE_ANIMALS'
}

interface FetchAnimalsAction {
    type: AnimalActionTypes.FETCH_ANIMALS;
    payload: IAnimal[]
}

interface FetchAnimalsDeleteAction {
    type: AnimalActionTypes.DELETE_ANIMALS;
    payload: _id
}

interface FetchAnimalsErrorAction {
    type: AnimalActionTypes.FETCH_ANIMALS_ERROR;
    payload: string
}

export type AnimalAction = FetchAnimalsAction | FetchAnimalsErrorAction | FetchAnimalsDeleteAction