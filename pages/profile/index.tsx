import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import MainLayout from '../../layouts/MainLayout';
import { useInput } from "../../hooks/useInput";
import { LoginFormSchema } from '../../utils/loginValidation';

const Index = () => {
    const login = useInput('')
    const password = useInput('')
    const { register, handleSubmit, setError, formState: { errors } } = useForm({
        mode: 'onSubmit',
        shouldFocusError: true,
        resolver: yupResolver(LoginFormSchema),
    })
    const onSubmit = data => console.log(data);

    return (
        <>
            <MainLayout>
                <h1>Войти на сайт:</h1>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <label>
                        Логин:<br />
                        <input type="text" {...register("login")} />
                        {errors.login && <p>{errors.login.message}</p>}
                    </label>
                    <p />
                    <label>
                        Пароль:<br />
                        <input type="password" {...register("password")} />
                        {errors.password && <p>{errors.password.message}</p>}
                    </label>
                    <p />
                    <input type="submit" value="Войти" />
                </form>
            </MainLayout>

        </>
    );
};

export default Index;

function register(arg0: string): JSX.IntrinsicAttributes & React.ClassAttributes<HTMLInputElement> & React.InputHTMLAttributes<HTMLInputElement> {
    throw new Error('Function not implemented.');
}
