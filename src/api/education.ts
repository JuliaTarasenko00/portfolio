import { IEducation } from '../types/typeResume';
import { $instants } from './request';

export interface IEducationInformation {
  uk: IEducation;
  en: IEducation;
  _id?: string;
}

export const getEducation = async (language: string) => {
  const { data } = await $instants.get<IEducation>(
    `/education?language=${language}`,
  );
  return data;
};

export const getAllEducationList = async () => {
  const { data } = await $instants.get<IEducationInformation[]>(
    '/education/all_information',
  );

  return data;
};

export const getEducationInformationById = async (id: string) => {
  const { data } = await $instants.get<IEducationInformation>(
    `/education/${id}`,
  );

  return data;
};

export const addEducationInformation = async (body: IEducationInformation) => {
  const { data } = await $instants.post(
    '/education/add_education_information',
    body,
  );

  return data;
};

export const editEducationInformation = async (
  body: IEducationInformation,
  id: string,
) => {
  const { data } = await $instants.patch(
    `/education/edit_information/${id}`,
    body,
  );

  return data;
};

export const removeEducationInformation = async (id: string) => {
  await $instants.delete(`/education/remove/${id}`);
};
