import { Controller, useForm } from 'react-hook-form';
import * as Yup from 'yup';
import { PasswordInput } from '../../components/ui/input/PasswordInput';
import { yupResolver } from '@hookform/resolvers/yup';
import { emailRegexp } from '../../helpers/emailRegexp';
import { EmailInput } from '../../components/ui/input/EmailInput';

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .matches(emailRegexp, 'Enter correctly email (email@gmail.com) ')
    .required(''),
  password: Yup.string().min(8).required(''),
});

type ValuesInput = Yup.InferType<typeof validationSchema>;

const initialValue: ValuesInput = {
  email: '',
  password: '',
};

export default function Login() {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<ValuesInput>({
    mode: 'onChange',
    defaultValues: initialValue,
    resolver: yupResolver(validationSchema),
  });
  console.log('errors: ', errors);

  const submitForm = (value: ValuesInput) => {
    console.log('value: ', value);
  };

  return (
    <section className="w-[350px] rounded-[30px] bg-[#fff] p-[40px]">
      <h2 className="mb-[20px] text-[25px] font-bold italic text-main_color">
        Login
      </h2>
      <form
        className="flex w-[100%] flex-col gap-[10px]"
        onSubmit={handleSubmit(submitForm)}
      >
        <Controller
          name="email"
          control={control}
          render={({ field }) => (
            <EmailInput
              {...field}
              errorMessage={errors.email?.message}
              placeholder="Enter email"
            />
          )}
        />
        <Controller
          name="password"
          control={control}
          render={({ field }) => (
            <PasswordInput
              {...field}
              errorMessage={errors.password?.message}
              placeholder="Enter password"
            />
          )}
        />
        <button
          type="submit"
          className="rounded-[10px] bg-[#8855ff] p-[10px] text-[16px] font-bold text-[#fff]"
        >
          Submit
        </button>
      </form>
    </section>
  );
}
