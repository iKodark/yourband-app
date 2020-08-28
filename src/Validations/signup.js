import * as Yup from 'yup';

export default Yup.object().shape({
    name: Yup.string()
        .required('Digite um nome')
        .min(4, 'Mínimo 4 caracteres'),

    username: Yup.string()
        .required('Digite um username')
        .min(4, 'Mínimo 4 caracteres')
        .max(20, 'Máximo 20 caracteres'),

    email: Yup.string()
        .email('Digite um email válido')
        .required('Digite um email'),

    password: Yup.string()
        .required('Digite uma senha')
        .min(6, 'A senha deve conter no mínimo 6 caracteres'),

    repeat_password: Yup.string()
        .required('Digite a senha novamente')
        .min(6, 'A senha deve conter no mínimo 6 caracteres')
        .oneOf([Yup.ref('password'), null], 'As senhas não correspondem')
});