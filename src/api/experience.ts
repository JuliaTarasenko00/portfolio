import { IExperience } from '../types/typeResume';
import { $instants } from './request';

export interface IExperienceInformation {
  uk: IExperience;
  en: IExperience;
  _id?: string;
}

const router = '/experience';

export const getExperience = async (language: string) => {
  const { data } = await $instants.get<IExperience[]>(
    `${router}?language=${language}`,
  );
  return data;
};

export const allExperienceInformation = async () => {
  const { data } = await $instants.get(`${router}/all_information`);

  return data;
};

export const getExperienceById = async (id: string) => {
  const { data } = await $instants.get(`${router}/${id}`);

  return data;
};

export const addExperienceInformation = async (
  body: IExperienceInformation,
) => {
  const data = await $instants.post(`${router}/add_information`, body);

  return data;
};

export const editExperienceInformation = async (
  body: IExperienceInformation,
  id: string,
) => {
  const { data } = await $instants.patch(
    `${router}/edit_information/${id}`,
    body,
  );

  return data;
};

export const deleteExperienceInformation = async (id) => {
  await $instants.delete(`${router}/remove/${id}`);
};
