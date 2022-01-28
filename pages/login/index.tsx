import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { setCookie } from 'nookies';
import { useDispatch } from 'react-redux';

import { useInput } from "../../hooks/useInput";
import { LoginFormSchema } from '../../utils/loginValidation';
import { CreateUserDto, LoginDto } from '../../utils/api/types';
import { UserApi } from '../../utils/api';

import { fetchUser } from '../../store/actions-creators/user';
import MainLayout from '../../layouts/MainLayout';

const LoginForm = () => {

	const dispatch = useDispatch();
	const [errorMessage, setErrorMessage] = React.useState('');
	const login = useInput('')
	const password = useInput('')
	const { register, handleSubmit, setError, formState: { errors } } = useForm({
		mode: 'onSubmit',
		shouldFocusError: true,
		resolver: yupResolver(LoginFormSchema),
	})
	const onSubmit = async (dto: LoginDto) => {
		try {
			const data = await UserApi.login(dto);
			console.log(data.token);
			setCookie(null, 'authToken', data.token, {
				maxAge: 30 * 24 * 60 * 60,
				path: '/',
			})
			//dispatch(fetchUser())

			setErrorMessage('');
		} catch (error) {
			console.warn('Login error', error);
			if (error.response) {
				setErrorMessage(error.response.data.message);
			}
		}
	};

	return (
		<MainLayout>
			<h1>Войти на сайт:</h1>
			<form onSubmit={handleSubmit(onSubmit)}>
				<label>
					Почта:<br />
					<input type="email" {...register("email")} />
					{errors.email && <p>{errors.email.message}</p>}
				</label>
				<p />
				<label>
					Пароль:<br />
					<input type="password" autoComplete="on" {...register("password")} />
					{errors.password && <p>{errors.password.message}</p>}
				</label>
				<p />
				<input type="submit" value="Войти" />
			</form>

		</MainLayout>
	);
};

export default LoginForm;
