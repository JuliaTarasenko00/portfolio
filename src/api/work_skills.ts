import { $instants } from './request';

const request: string = '/skills';

export const getWorkSkills = async () => {
  const { data } = await $instants.get(`${request}`);

  return data;
};
