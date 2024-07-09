import { Controller, useForm } from 'react-hook-form';
import { initialValue } from './initialValue';
import { yupResolver } from '@hookform/resolvers/yup';
import { TextInput } from '../../../ui/input/TextInput';
import {
  addEducationInformation,
  editEducationInformation,
} from '../../../../api/education';
import { IEducation } from '../../../../types/typeResume';
import { FC, useEffect } from 'react';
import { validationSchema, ValuesInput } from './validationSchema';
import { toast } from 'react-toastify';
import { styleForToastity } from '../../../ui/styleForToastity';

interface IEducationForm {
  information: { uk: IEducation; en: IEducation };
  handleById: (id: string) => void;
  contactId: string;
  refetch: () => void;
}

export const EducationForm: FC<IEducationForm> = ({
  information,
  handleById,
  contactId,
  refetch,
}) => {
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors, isDirty },
  } = useForm<ValuesInput>({
    defaultValues: initialValue,
    mode: 'onChange',
    resolver: yupResolver(validationSchema),
  });

  useEffect(() => {
    if (information && contactId) {
      reset({
        start_education_uk: information.uk.start_education,
        end_education_uk: information.uk.end_education,
        degree_uk: information.uk.degree,
        programme_subject_uk: information.uk.programme_subject,
        name_organization_uk: information.uk.name_organization,
        end_education_en: information.en.end_education,
        start_education_en: information.en.start_education,
        degree_en: information.en.degree,
        programme_subject_en: information.en.programme_subject,
        name_organization_en: information.en.name_organization,
      });
    } else {
      reset({
        start_education_uk: '',
        end_education_uk: '',
        degree_uk: '',
        programme_subject_uk: '',
        name_organization_uk: '',
        end_education_en: '',
        start_education_en: '',
        degree_en: '',
        programme_subject_en: '',
        name_organization_en: '',
      });
    }
  }, [contactId, information, reset]);

  const submitForm = async (values: ValuesInput) => {
    try {
      const data = {
        uk: {
          start_education: values.start_education_uk,
          end_education: values.end_education_uk,
          degree: values.degree_uk,
          programme_subject: values.programme_subject_uk,
          name_organization: values.name_organization_uk,
        },
        en: {
          start_education: values.start_education_en,
          end_education: values.end_education_en,
          degree: values.degree_en,
          programme_subject: values.programme_subject_en,
          name_organization: values.name_organization_en,
        },
      };

      if (contactId) {
        await editEducationInformation(data, contactId);
        toast.success('Update Data', styleForToastity);
      } else {
        await addEducationInformation(data);
        toast.success('Added Education Information', styleForToastity);
        reset();
      }

      refetch();
    } catch (error: any) {
      toast.error(error.message, styleForToastity);
    }
  };

  return (
    <form className="w-full" onSubmit={handleSubmit(submitForm)}>
      <div className="flex w-full justify-between gap-[10px]">
        <div className="flex w-full flex-col gap-[8px]">
          <div className="flex items-center gap-[5px]">
            <Controller
              name="start_education_uk"
              control={control}
              render={({ field }) => (
                <TextInput
                  {...field}
                  placeholder="Початок навчання"
                  errorMessage={errors.start_education_uk?.message}
                />
              )}
            />{' '}
            <Controller
              name="end_education_uk"
              control={control}
              render={({ field }) => (
                <TextInput
                  {...field}
                  placeholder="Закінчення навчання"
                  errorMessage={errors.end_education_uk?.message}
                />
              )}
            />
          </div>
          <Controller
            name="degree_uk"
            control={control}
            render={({ field }) => (
              <TextInput
                {...field}
                placeholder="Ступінь освіти"
                errorMessage={errors.degree_uk?.message}
              />
            )}
          />
          <Controller
            name="name_organization_uk"
            control={control}
            render={({ field }) => (
              <TextInput
                {...field}
                placeholder="Назва навчального закладу"
                errorMessage={errors.name_organization_uk?.message}
              />
            )}
          />
          <Controller
            name="programme_subject_uk"
            control={control}
            render={({ field }) => (
              <TextInput
                {...field}
                placeholder="Спеціальність"
                errorMessage={errors.programme_subject_uk?.message}
              />
            )}
          />
        </div>
        <div className="flex w-full flex-col gap-[8px]">
          <div className="flex items-center gap-[5px]">
            <Controller
              name="start_education_en"
              control={control}
              render={({ field }) => (
                <TextInput
                  {...field}
                  placeholder="Start education"
                  errorMessage={errors.start_education_uk?.message}
                />
              )}
            />
            <Controller
              name="end_education_en"
              control={control}
              render={({ field }) => (
                <TextInput
                  {...field}
                  placeholder="End education"
                  errorMessage={errors.end_education_uk?.message}
                />
              )}
            />
          </div>
          <Controller
            name="degree_en"
            control={control}
            render={({ field }) => (
              <TextInput
                {...field}
                placeholder="Degree"
                errorMessage={errors.degree_en?.message}
              />
            )}
          />
          <Controller
            name="name_organization_en"
            control={control}
            render={({ field }) => (
              <TextInput
                {...field}
                placeholder="Name organization"
                errorMessage={errors.name_organization_en?.message}
              />
            )}
          />
          <Controller
            name="programme_subject_en"
            control={control}
            render={({ field }) => (
              <TextInput
                {...field}
                placeholder="Programme subject"
                errorMessage={errors.programme_subject_en?.message}
              />
            )}
          />
        </div>
      </div>
      <div className="mt-[20px] flex flex-row-reverse justify-between">
        <button
          type="submit"
          className="block rounded-[10px] bg-[#8855ff] px-[20px] py-[10px] text-[18px] text-[#fff] disabled:cursor-no-drop disabled:bg-[grey]"
          disabled={!isDirty}
        >
          Submit
        </button>
        <button
          type="button"
          className="text-[18px] font-bold text-[#e02b2b]"
          onClick={() => {
            handleById('');
            reset();
          }}
        >
          Clear
        </button>
      </div>
    </form>
  );
};
