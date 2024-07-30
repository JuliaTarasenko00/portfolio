import { IWorkSkills } from '../types/typeResume';
import { $instants } from './request';

const request: string = '/skills';

export const getFrontSkills = async () => {
  const { data } = await $instants.get<IWorkSkills[]>(`${request}?type=front`);

  return data;
};

export const getStyleSkills = async () => {
  const { data } = await $instants.get<IWorkSkills[]>(`${request}?type=style`);

  return data;
};
