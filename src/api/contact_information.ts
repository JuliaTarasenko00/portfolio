import { IContactInformation } from '../types/typeContactInformation';
import { $instants } from './request';

export const getContactInformation = async (language: string) => {
  const { data } = await $instants.get<IContactInformation>(
    `/contact_information?language=${language}`,
  );
  return data;
};
