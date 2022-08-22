import * as Yup from 'yup';

export const signupSchema = Yup.object({
    name: Yup.string().required(),
    username: Yup.string(),
    email: Yup.string().email('email is required').required().trim(),
    password: Yup.string().required()
})