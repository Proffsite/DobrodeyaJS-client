import axios from 'axios';
import { CreateUserDto, LoginDto, ResponseUser } from './types';

const instance = axios.create({
	baseURL: 'http://localhost:5000/',
});

export const UserApi = {
	async register(dto: CreateUserDto) {
		const { data } = await instance.post<CreateUserDto, { data: ResponseUser }>('/register', dto);
		return data;
	},
	async login(dto: LoginDto) {
		const { data } = await instance.post<LoginDto, { data: ResponseUser }>('/login', dto);
		console.log(data, 'data token');
		return data;
	},
	async getMe(token: string) {
		const { data } = await instance.get<ResponseUser>('/users/me', {
			headers: {
				Authorization: `Bearer ${token}`,
			}
		});
		return data;
	},

};