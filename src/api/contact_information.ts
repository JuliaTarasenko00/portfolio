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
  const { data } = await $instants.post<IContactInformationAll>(
    '/contact_information/add_information',
    body,
  );
  return data;
};

export const updateContactInformation = async <T>(body: T, id: string) => {
  const { data } = await $instants.patch<IContactInformationAll>(
    `/contact_information/edit/${id}`,
    body,
  );

  return data;
};

export const clearContactInformation = async (id: string) => {
  await $instants.delete(`/contact_information/remove/${id}`);
};
