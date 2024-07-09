import * as Yup from 'yup';

export const validationSchema = Yup.object().shape({
  end_education_en: Yup.string().required('File is required'),
  start_education_en: Yup.string().required('File is required'),
  degree_en: Yup.string().required('File is required'),
  programme_subject_en: Yup.string(),
  name_organization_en: Yup.string().required('File is required'),

  start_education_uk: Yup.string().required("Поле обов'язкове до заповнення"),
  end_education_uk: Yup.string().required("Поле обов'язкове до заповнення"),
  degree_uk: Yup.string().required("Поле обов'язкове до заповнення"),
  programme_subject_uk: Yup.string(),
  name_organization_uk: Yup.string().required("Поле обов'язкове до заповнення"),
});

export type ValuesInput = Yup.InferType<typeof validationSchema>;
