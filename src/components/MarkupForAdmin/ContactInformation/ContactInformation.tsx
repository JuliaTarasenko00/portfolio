import { yupResolver } from '@hookform/resolvers/yup';
import { Controller, useForm } from 'react-hook-form';

import * as Yup from 'yup';
import { TextInput } from '../../ui/input/TextInput';
import { PhoneInput } from '../../ui/input/PhoneInput';

const validationSchema = Yup.object().shape({
  name: Yup.string().required('File is required'),
  avatar: Yup.string().required('File is required'),
  position: Yup.string().required('File is required'),
  phoneNumber: Yup.string().required('File is required'),
  email: Yup.string().required('File is required'),
  location: Yup.string().required('File is required'),
  git: Yup.string().required('File is required'),
  linkedin: Yup.string().required('File is required'),
  cv: Yup.string().required('File is required'),
  name_uk: Yup.string().required("Поле обов'язкове до заповнення"),
  avatar_uk: Yup.string().required("Поле обов'язкове до заповнення"),
  position_uk: Yup.string().required("Поле обов'язкове до заповнення"),
  phoneNumber_uk: Yup.string().required("Поле обов'язкове до заповнення"),
  email_uk: Yup.string().required("Поле обов'язкове до заповнення"),
  location_uk: Yup.string().required("Поле обов'язкове до заповнення"),
  git_uk: Yup.string().required("Поле обов'язкове до заповнення"),
  linkedin_uk: Yup.string().required("Поле обов'язкове до заповнення"),
  cv_uk: Yup.string().required("Поле обов'язкове до заповнення"),
});

type ValuesInput = Yup.InferType<typeof validationSchema>;

const initialValue: ValuesInput = {
  name: '',
  avatar: '',
  position: '',
  phoneNumber: '',
  email: '',
  location: '',
  git: '',
  linkedin: '',
  cv: '',
  name_uk: '',
  avatar_uk: '',
  position_uk: '',
  phoneNumber_uk: '',
  email_uk: '',
  location_uk: '',
  git_uk: '',
  linkedin_uk: '',
  cv_uk: '',
};

export const ContactInformation = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<ValuesInput>({
    defaultValues: initialValue,
    mode: 'onChange',
    resolver: yupResolver(validationSchema),
  });

  const handelSubmit = handleSubmit((value) => {
    console.log(value);
  });

  return (
    <form className="w-full" onSubmit={handelSubmit}>
      <div className="flex w-[100%] justify-between gap-[10px]">
        <div className="flex w-full flex-col gap-[8px]">
          <Controller
            name="name_uk"
            control={control}
            render={({ field }) => (
              <TextInput
                placeholder="Ім'я та Призвіще"
                {...field}
                errorMessage={errors.name_uk?.message}
              />
            )}
          />
          <Controller
            name="avatar_uk"
            control={control}
            render={({ field }) => (
              <TextInput
                placeholder="Фото"
                {...field}
                errorMessage={errors.avatar_uk?.message}
              />
            )}
          />
          <Controller
            name="position_uk"
            control={control}
            render={({ field }) => (
              <TextInput
                placeholder="Посада"
                {...field}
                errorMessage={errors.position_uk?.message}
              />
            )}
          />
          <Controller
            name="phoneNumber_uk"
            control={control}
            render={({ field }) => (
              <PhoneInput
                placeholder="Номер Телефону"
                {...field}
                errorMessage={errors.phoneNumber_uk?.message}
              />
            )}
          />
          <Controller
            name="email_uk"
            control={control}
            render={({ field }) => (
              <TextInput
                placeholder="Email"
                {...field}
                errorMessage={errors.email_uk?.message}
              />
            )}
          />
          <Controller
            name="location_uk"
            control={control}
            render={({ field }) => (
              <TextInput
                placeholder="Країна та місце проживання"
                {...field}
                errorMessage={errors.location_uk?.message}
              />
            )}
          />
          <Controller
            name="git_uk"
            control={control}
            render={({ field }) => (
              <TextInput
                placeholder="Git"
                {...field}
                errorMessage={errors.git_uk?.message}
              />
            )}
          />{' '}
          <Controller
            name="linkedin_uk"
            control={control}
            render={({ field }) => (
              <TextInput
                placeholder="Linkedin"
                {...field}
                errorMessage={errors.linkedin_uk?.message}
              />
            )}
          />{' '}
          <Controller
            name="cv_uk"
            control={control}
            render={({ field }) => (
              <TextInput
                placeholder="CV"
                {...field}
                errorMessage={errors.cv_uk?.message}
              />
            )}
          />
        </div>
        <div className="flex w-full flex-col gap-[8px]">
          <Controller
            name="name"
            control={control}
            render={({ field }) => (
              <TextInput
                placeholder="Full Name"
                {...field}
                errorMessage={errors.name?.message}
              />
            )}
          />
          <Controller
            name="avatar"
            control={control}
            render={({ field }) => (
              <TextInput
                placeholder="Image"
                {...field}
                errorMessage={errors.avatar?.message}
              />
            )}
          />
          <Controller
            name="position"
            control={control}
            render={({ field }) => (
              <TextInput
                placeholder="Position"
                {...field}
                errorMessage={errors.position?.message}
              />
            )}
          />
          <Controller
            name="phoneNumber"
            control={control}
            render={({ field }) => (
              <PhoneInput
                placeholder="Phone Number"
                {...field}
                errorMessage={errors.phoneNumber?.message}
              />
            )}
          />
          <Controller
            name="email"
            control={control}
            render={({ field }) => (
              <TextInput
                placeholder="Email"
                {...field}
                errorMessage={errors.email?.message}
              />
            )}
          />
          <Controller
            name="location"
            control={control}
            render={({ field }) => (
              <TextInput
                placeholder="Location"
                {...field}
                errorMessage={errors.location?.message}
              />
            )}
          />
          <Controller
            name="git"
            control={control}
            render={({ field }) => (
              <TextInput
                placeholder="Git"
                {...field}
                errorMessage={errors.git?.message}
              />
            )}
          />
          <Controller
            name="linkedin"
            control={control}
            render={({ field }) => (
              <TextInput
                placeholder="Linkedin"
                {...field}
                errorMessage={errors.linkedin?.message}
              />
            )}
          />
          <Controller
            name="cv"
            control={control}
            render={({ field }) => (
              <TextInput
                placeholder="CV"
                {...field}
                errorMessage={errors.cv?.message}
              />
            )}
          />
        </div>
      </div>
      <button
        type="submit"
        className="ml-auto mt-[20px] block rounded-[10px] bg-[#8855ff] px-[20px] py-[10px] text-[#fff]"
      >
        Submit
      </button>
    </form>
  );
};
