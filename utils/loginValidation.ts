import * as yup from "yup";

export const LoginFormSchema = yup.object({
    login: yup.string().required('Логин обязательный'),
    password: yup.string().min(6, 'Длина пароля должна быть более 6 символов').required('Пароль обязательный'),
}).required();
