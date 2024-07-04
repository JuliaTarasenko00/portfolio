import {
  IContactInformation,
  IContactInformationAll,
} from '../types/typeContactInformation';
import { $instants } from './request';

export const getContactInformation = async (language: string) => {
  const { data } = await $instants.get<IContactInformation>(
    `/contact_information?language=${language}`,
  );
  return data;
};

export const getAllContactInformation = async () => {
  const { data } = await $instants.get<IContactInformationAll>(
    '/contact_information/all_information',
  );
  return data;
};

export const addContactInformation = async <T>(body: T) => {
  const { data } = await $instants.post(
    '/contact_information/add_information',
    body,
  );
  return data;
};
