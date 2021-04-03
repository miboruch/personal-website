import * as Yup from 'yup';

export const ContactFormValidation = Yup.object().shape({
  email: Yup.string()
    .email('Invalid email')
    .required('Email is required'),
  name: Yup.string()
    .strict()
    .min(2, 'Name too short - 2 chars minimum')
    .required('Name is required'),
  message: Yup.string()
    .strict()
    .min(2, 'Message too short - 2 chars minimum')
    .required('Message is required')
});
