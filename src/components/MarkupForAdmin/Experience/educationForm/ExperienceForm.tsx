import { Controller, useForm } from 'react-hook-form';
import { validationSchema, ValuesInput } from './validationSchema';
import { initialValue } from './initialValue';
import { yupResolver } from '@hookform/resolvers/yup';
import { TextInput } from '../../../ui/input/TextInput';
import {
  addExperienceInformation,
  editExperienceInformation,
  IExperienceInformation,
} from '../../../../api/experience';
import { toast } from 'react-toastify';
import { styleForToastity } from '../../../ui/styleForToastity';
import { FC, useEffect } from 'react';

interface IExperienceForm {
  information: IExperienceInformation;
  id: string;
  handleById: (id: string) => void;
  refetch: () => void;
}

export const ExperienceForm: FC<IExperienceForm> = ({
  information,
  id,
  handleById,
  refetch,
}) => {
  const {
    control,
    reset,
    handleSubmit,
    formState: { errors, isDirty },
  } = useForm<ValuesInput>({
    defaultValues: initialValue,
    mode: 'onChange',
    resolver: yupResolver(validationSchema),
  });

  useEffect(() => {
    if (information && id) {
      reset({
        start_work_uk: information.uk.start_work,
        end_work_uk: information.uk.end_work,
        position_uk: information.uk.position,
        name_organization_uk: information.uk.name_organization,
        start_work_en: information.en.start_work,
        end_work_en: information.en.end_work,
        position_en: information.en.position,
        name_organization_en: information.en.name_organization,
      });
    } else {
      reset({
        start_work_uk: '',
        end_work_uk: '',
        position_uk: '',
        name_organization_uk: '',
        start_work_en: '',
        end_work_en: '',
        position_en: '',
        name_organization_en: '',
      });
    }
  }, [id, information, reset]);

  const submitForm = async (value: ValuesInput) => {
    const data = {
      uk: {
        start_work: value.start_work_uk,
        end_work: value.end_work_uk,
        position: value.position_uk,
        name_organization: value.name_organization_uk,
      },
      en: {
        start_work: value.start_work_uk,
        end_work: value.end_work_uk,
        position: value.position_uk,
        name_organization: value.name_organization_uk,
      },
    };
    try {
      if (!id) {
        await addExperienceInformation(data);
        toast.success('Added Experience information', styleForToastity);
      } else {
        await editExperienceInformation(data, id);
        toast.success('Update Data', styleForToastity);
      }
      refetch();
    } catch (error: any) {
      toast.error(error.message, styleForToastity);
    }
  };

  return (
    <form className="w-full" onSubmit={handleSubmit(submitForm)}>
      <div className="flex w-full justify-between gap-[10px] sm:flex">
        <div className="flex w-full flex-col gap-[8px]">
          <div className="flex items-center gap-[5px]">
            <Controller
              name="start_work_uk"
              control={control}
              render={({ field }) => (
                <TextInput
                  {...field}
                  placeholder="Початок роботи"
                  errorMessage={errors.start_work_uk?.message}
                />
              )}
            />
            <Controller
              name="end_work_uk"
              control={control}
              render={({ field }) => (
                <TextInput
                  {...field}
                  placeholder="Закінчення роботи"
                  errorMessage={errors.end_work_uk?.message}
                />
              )}
            />
          </div>
          <Controller
            name="name_organization_uk"
            control={control}
            render={({ field }) => (
              <TextInput
                {...field}
                placeholder="Назва оргазанізації"
                errorMessage={errors.name_organization_uk?.message}
              />
            )}
          />
          <Controller
            name="position_uk"
            control={control}
            render={({ field }) => (
              <TextInput
                {...field}
                placeholder="Посада"
                errorMessage={errors.position_uk?.message}
              />
            )}
          />
        </div>
        <div className="flex w-full flex-col gap-[8px]">
          <div className="flex items-center gap-[5px]">
            <Controller
              name="start_work_en"
              control={control}
              render={({ field }) => (
                <TextInput
                  {...field}
                  placeholder="Start work"
                  errorMessage={errors.start_work_en?.message}
                />
              )}
            />
            <Controller
              name="end_work_en"
              control={control}
              render={({ field }) => (
                <TextInput
                  {...field}
                  placeholder="End work"
                  errorMessage={errors.end_work_en?.message}
                />
              )}
            />
          </div>
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
            name="position_en"
            control={control}
            render={({ field }) => (
              <TextInput
                {...field}
                placeholder="Position"
                errorMessage={errors.position_en?.message}
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
            reset();

            if (id !== '') handleById('');
          }}
        >
          Clear
        </button>
      </div>
    </form>
  );
};
