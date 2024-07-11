import * as Yup from 'yup';
import { emailRegexp } from '../../../helpers/emailRegexp';

export const validationSchema = Yup.object().shape({
  name: Yup.string().required('File is required'),
  avatar: Yup.string().required('File is required'),
  position: Yup.string().required('File is required'),
  phoneNumber: Yup.string().required('File is required'),
  email: Yup.string()
    .matches(emailRegexp, 'Enter correctly email (email@gmail.com) ')
    .required('File is required'),
  location: Yup.string().required('File is required'),
  git: Yup.string().required('File is required'),
  linkedin: Yup.string().required('File is required'),
  cv: Yup.string().required('File is required'),
  name_uk: Yup.string().required("Поле обов'язкове до заповнення"),
  avatar_uk: Yup.string().required("Поле обов'язкове до заповнення"),
  position_uk: Yup.string().required("Поле обов'язкове до заповнення"),
  phoneNumber_uk: Yup.string().required("Поле обов'язкове до заповнення"),
  email_uk: Yup.string()
    .matches(emailRegexp, 'Введіть email коректно (email@gmail.com) ')
    .required("Поле обов'язкове до заповнення"),
  location_uk: Yup.string().required("Поле обов'язкове до заповнення"),
  git_uk: Yup.string().required("Поле обов'язкове до заповнення"),
  linkedin_uk: Yup.string().required("Поле обов'язкове до заповнення"),
  cv_uk: Yup.string().required("Поле обов'язкове до заповнення"),
});

export type ValuesInput = Yup.InferType<typeof validationSchema>;
