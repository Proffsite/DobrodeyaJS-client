export type LoginDto = {
	email: string;
	password: string;
}
export type CreateUserDto = {
	name: string;
} & LoginDto;

export type ResponseUser = {
	token: string;
}