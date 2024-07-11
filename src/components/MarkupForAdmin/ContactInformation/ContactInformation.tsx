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
  updateContactInformation,
} from '../../../api/contact_information';
import { ValuesInput, validationSchema } from './validationSchema';
import { initialValue } from './initialValue';
import { LoaderForComponent } from '../../ui/Loader/LoaderForCompenent';
import { toast } from 'react-toastify';
import { styleForToastity } from '../../ui/styleForToastity';
import { EmailInput } from '../../ui/input/EmailInput';

export const ContactInformation = () => {
  const [selectImgUk, setSelectImgUk] = useState<File | null>(null);
  const [selectImgEn, setSelectImgEn] = useState<File | null>(null);

  const { data, isLoading, refetch, isFetching } = useQuery({
    queryKey: ['all_contact_information'],
    queryFn: getAllContactInformation,
  });

  const [visible, setVisible] = useState({
    enInput: false,
    ukInput: false,
  });

  const {
    handleSubmit,
    control,
    reset,
    formState: { errors, isDirty },
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
        avatar: data.en.avatar,

        name_uk: data.uk.name,
        position_uk: data.uk.position,
        phoneNumber_uk: data.uk.phoneNumber,
        email_uk: data.uk.email,
        location_uk: data.uk.location,
        git_uk: data.uk.git,
        linkedin_uk: data.uk.linkedin,
        cv_uk: data.uk.cv,
        avatar_uk: data.uk.avatar,
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

      if (data?._id) {
        await updateContactInformation(body, data._id);
        toast.success('Update Data', styleForToastity);
      } else {
        await addContactInformation(body);
        toast.success('Added Contact Information', styleForToastity);
      }
      refetch();
    } catch (error: any) {
      toast.error(error.message, styleForToastity);
    }
  };

  return (
    <>
      {isFetching && <LoaderForComponent />}
      {!isFetching && (
        <form className="w-full" onSubmit={handleSubmit(handelSubmit)}>
          <div className="w-[100%] justify-between gap-[10px] sm:flex">
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
              <>
                {visible.ukInput || !data?.uk?.avatar ? (
                  <Controller
                    name="avatar_uk"
                    control={control}
                    render={({ field }) => (
                      <ImageInput
                        placeholder="Фото"
                        {...field}
                        value=""
                        setSelectImg={setSelectImgUk}
                        errorMessage={errors.avatar_uk?.message}
                      />
                    )}
                  />
                ) : (
                  <button
                    type="button"
                    onClick={() =>
                      setVisible((prev) => ({ ...prev, ukInput: true }))
                    }
                  >
                    Змінити фото
                  </button>
                )}
              </>
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
                  <EmailInput
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
              {visible.enInput || !data?.en?.avatar ? (
                <Controller
                  name="avatar"
                  control={control}
                  render={({ field }) => (
                    <ImageInput
                      placeholder="Image"
                      {...field}
                      value=""
                      setSelectImg={setSelectImgEn}
                      errorMessage={errors.avatar_uk?.message}
                    />
                  )}
                />
              ) : (
                <button
                  type="button"
                  onClick={() =>
                    setVisible((prev) => ({ ...prev, enInput: true }))
                  }
                >
                  Change avatar
                </button>
              )}
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
                  <EmailInput
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
            disabled={!isDirty}
            className="ml-auto mt-[20px] block rounded-[10px] bg-[#8855ff] px-[20px] py-[10px] text-[#fff] disabled:cursor-no-drop disabled:bg-[grey]"
          >
            Submit
          </button>
        </form>
      )}
    </>
  );
};
