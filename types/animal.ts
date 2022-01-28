
export interface IAnimal extends mongoose.Document {
	_id: ObjectId;
	name: string;
	age: string;
	text: string;
	date: number;
	picture: string;
	sex: string;
	type: string;
	category: string;
}

export interface AnimalState {
	animals: IAnimal[];
	error: string;
}

export enum AnimalActionTypes {
	FETCH_ANIMALS = 'FETCH_ANIMALS',
	FETCH_ANIMALS_ERROR = 'FETCH_ANIMALS_ERROR',
	ANIMALS_DELETE = 'ANIMALS_DELETE',
	ANIMALS_DELETE_ERROR = 'ANIMALS_DELETE_ERROR'
}

interface FetchAnimalsAction {
	type: AnimalActionTypes.FETCH_ANIMALS;
	payload: IAnimal[]
}

interface AnimalsDeleteAction {
	type: AnimalActionTypes.ANIMALS_DELETE;
	payload: number
}

interface AnimalsDeleteErrorAction {
	type: AnimalActionTypes.ANIMALS_DELETE_ERROR;
	payload: string
}

interface FetchAnimalsErrorAction {
	type: AnimalActionTypes.FETCH_ANIMALS_ERROR;
	payload: string
}

export type AnimalAction = FetchAnimalsAction | FetchAnimalsErrorAction | AnimalsDeleteAction | AnimalsDeleteErrorAction