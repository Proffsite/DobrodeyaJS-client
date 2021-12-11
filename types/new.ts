export interface INew extends mongoose.Document {
	_id: ObjectId;
	name: string;
	text: string;
	date: number;
	picture: string;
}

export interface NewState {
	news: INew[];
	error: string;
}

export enum NewActionTypes {
	FETCH_NEWS = 'FETCH_NEWS',
	FETCH_NEWS_ERROR = 'FETCH_NEWS_ERROR',
	NEWS_DELETE = 'NEWS_DELETE',
	NEWS_DELETE_ERROR = 'NEWS_DELETE_ERROR'
}

interface FetchNewsAction {
	type: NewActionTypes.FETCH_NEWS;
	payload: INew[]
}

interface NewsDeleteAction {
	type: NewActionTypes.NEWS_DELETE;
	payload: number
}

interface NewsDeleteErrorAction {
	type: NewActionTypes.NEWS_DELETE_ERROR;
	payload: string
}

interface FetchNewsErrorAction {
	type: NewActionTypes.FETCH_NEWS_ERROR;
	payload: string
}

export type NewAction = FetchNewsAction | NewsDeleteAction | NewsDeleteErrorAction | FetchNewsErrorAction