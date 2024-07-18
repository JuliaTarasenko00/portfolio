import * as Yup from 'yup';

export const validationSchema = Yup.object().shape({
  start_work_uk: Yup.string().required('File is required'),
  end_work_uk: Yup.string().required('File is required'),
  position_uk: Yup.string().required('File is required'),
  name_organization_uk: Yup.string().required('File is required'),

  start_work_en: Yup.string().required("Поле обов'язкове до заповнення"),
  end_work_en: Yup.string().required("Поле обов'язкове до заповнення"),
  position_en: Yup.string().required("Поле обов'язкове до заповнення"),
  name_organization_en: Yup.string().required("Поле обов'язкове до заповнення"),
});

export type ValuesInput = Yup.InferType<typeof validationSchema>;
