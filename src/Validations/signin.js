import * as Yup from 'yup';

export default Yup.object().shape({

    login: Yup.string()
        .required('Digite um login'),

    password: Yup.string()
        .required('Digite uma senha')
        .min(6, 'A senha deve conter no mínimo 6 caracteres'),
});