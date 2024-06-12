import * as yup from 'yup';

let LoginSchema = yup.object().shape({
    email: yup.string().email("Invalid email format.").required("Email is required."),
    password: yup.string().required("Password is required.")
});

export default LoginSchema;
