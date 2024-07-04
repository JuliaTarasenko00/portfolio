import { useQuery } from '@tanstack/react-query';
import { yupResolver } from '@hookform/resolvers/yup';
import { Controller, useForm } from 'react-hook-form';
import { TextInput } from '../../ui/input/TextInput';
import { PhoneInput } from '../../ui/input/PhoneInput';
import { ImageInput } from '../../ui/input/ImageInput';
import { useEffect, useState } from 'react';
import {
  addContactInformation,
  getAllContactInformation,
} from '../../../api/contact_information';
import { ValuesInput, validationSchema } from './validationSchema';
import { initialValue } from './initialValue';

export const ContactInformation = () => {
  const [selectImgUk, setSelectImgUk] = useState<File | null>(null);
  const [selectImgEn, setSelectImgEn] = useState<File | null>(null);

  const { data, isLoading } = useQuery({
    queryKey: ['all_contact_information'],
    queryFn: getAllContactInformation,
  });

  const {
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm<ValuesInput>({
    defaultValues: initialValue,
    mode: 'onChange',
    resolver: yupResolver(validationSchema),
  });

  useEffect(() => {
    if (data && !isLoading) {
      reset({
        name: data.en.name,
        position: data.en.position,
        phoneNumber: data.en.phoneNumber,
        email: data.en.email,
        location: data.en.location,
        git: data.en.git,
        linkedin: data.en.linkedin,
        cv: data.en.cv,

        name_uk: data.uk.name,
        position_uk: data.uk.position,
        phoneNumber_uk: data.uk.phoneNumber,
        email_uk: data.uk.email,
        location_uk: data.uk.location,
        git_uk: data.uk.git,
        linkedin_uk: data.uk.linkedin,
        cv_uk: data.uk.cv,
      });
    }
  }, [data, isLoading, reset]);

  const handelSubmit = async (value: ValuesInput) => {
    try {
      const body = new FormData();

      body.append('uk[name]', value.name_uk);
      body.append('uk[avatar]', selectImgUk ? selectImgUk : value.avatar_uk);
      body.append('uk[position]', value.position_uk);
      body.append('uk[phoneNumber]', value.phoneNumber_uk);
      body.append('uk[email]', value.email_uk);
      body.append('uk[location]', value.location_uk);
      body.append('uk[git]', value.git_uk);
      body.append('uk[linkedin]', value.linkedin_uk);
      body.append('uk[cv]', value.cv_uk);

      body.append('en[name]', value.name);
      body.append('en[avatar]', selectImgEn ? selectImgEn : value.avatar);
      body.append('en[position]', value.position);
      body.append('en[phoneNumber]', value.phoneNumber);
      body.append('en[email]', value.email);
      body.append('en[location]', value.location);
      body.append('en[git]', value.git);
      body.append('en[linkedin]', value.linkedin);
      body.append('en[cv]', value.cv);

      await addContactInformation(body);
    } catch (error) {
      console.log('error: ', error);
    }
  };

  return (
    <form className="w-full" onSubmit={handleSubmit(handelSubmit)}>
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
              <ImageInput
                placeholder="Фото"
                {...field}
                setSelectImg={setSelectImgUk}
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
          />
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
              <ImageInput
                placeholder="Image"
                {...field}
                setSelectImg={setSelectImgEn}
                errorMessage={errors.avatar_uk?.message}
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
        disabled
        className="ml-auto mt-[20px] block rounded-[10px] bg-[#8855ff] px-[20px] py-[10px] text-[#fff] disabled:cursor-no-drop disabled:bg-[grey]"
      >
        Submit
      </button>
    </form>
  );
};
