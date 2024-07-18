import { Controller, useForm } from 'react-hook-form';
import * as Yup from 'yup';
import { PasswordInput } from '../../components/ui/input/PasswordInput';
import { yupResolver } from '@hookform/resolvers/yup';
import { emailRegexp } from '../../helpers/emailRegexp';
import { EmailInput } from '../../components/ui/input/EmailInput';
import { signIn } from '../../api/auth';
import { useNavigate } from 'react-router-dom';
import { routers } from '../../helpers/routes';
import { useEffect, useState } from 'react';
import { useAuth } from '../../helpers/context/authContext/useAuth';
import { toast } from 'react-toastify';
import { styleForToastity } from '../../components/ui/styleForToastity';
import { IAuth } from '../../types/authResult';
import { LoadingComponent } from '../../components/ui/LoadingComponent';
import { LoaderForComponent } from '../../components/ui/Loader/LoaderForCompenent';

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
  const navigate = useNavigate();
  const { token, setToken } = useAuth();
  const [loading, setLoading] = useState<boolean>(false);
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<ValuesInput>({
    mode: 'onChange',
    defaultValues: initialValue,
    resolver: yupResolver(validationSchema),
  });

  useEffect(() => {
    token && navigate(routers.admin);
  }, [token, navigate]);

  const submitForm = async (value: ValuesInput) => {
    try {
      setLoading(true);
      const result: IAuth = await signIn(value);
      setToken(result.token);
      navigate(routers.admin);
      setLoading(false);
    } catch (error: any) {
      setLoading(true);
      toast.error(error.message, styleForToastity);
      setLoading(false);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {loading && <LoaderForComponent />}
      {!loading && (
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
      )}
    </>
  );
}
