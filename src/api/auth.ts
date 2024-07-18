import { IAuth } from '../types/authResult';
import { $instants } from './request';

interface IBody {
  email: string;
  password: string;
}
export const signIn = async (body: IBody) => {
  const { data } = await $instants.post<IAuth>('/auth/signin', body);

  return data;
};

export const signOut = async () => {
  await $instants.post('/auth/signout');
};

export const currentUser = async () => {
  const { data } = await $instants.get<IAuth>('/auth/current');

  return data;
};
