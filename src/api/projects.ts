import { IProject } from '../types/typeProject';
import { $instants } from './request';

const request = '/project';

export const getProjectsByLanguage = async (language: string) => {
  const { data } = await $instants.get<IProject[]>(
    `${request}?language=${language}`,
  );

  return data;
};
