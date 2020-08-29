import * as Yup from 'yup';

export default Yup.object().shape({

    email: Yup.string()
        .email('Digite um email válido')
        .required('Digite um email'),

    password: Yup.string()
        .required('Digite uma senha')
        .min(6, 'A senha deve conter no mínimo 6 caracteres'),
});