import { $instants } from './request';

export const getEducation = async (language: string) => {
  const { data } = await $instants.get(`/education?language=${language}`);
  return data;
};
