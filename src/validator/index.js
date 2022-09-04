import * as Yup from 'yup';

export const signupSchema = Yup.object({
    name: Yup.string().required(),
    username: Yup.string(),
    email: Yup.string().email('email is required').required().trim(),
    password: Yup.string().required()
});
export const loginSchema = Yup.object({
    email: Yup.string().email('email is required').required().trim(),
    password: Yup.string().required()
});
export const noteSchema = Yup.object({
    title: Yup.string().required(),
    tag: Yup.string().required(),
    description: Yup.string().required().min(50).max(1000),
});
