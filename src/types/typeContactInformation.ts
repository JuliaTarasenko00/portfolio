export interface IContactInformationAll {
  uk: IContactInformation;
  en: IContactInformation;
  _id: string;
}

export interface IContactInformation {
  name: string;
  avatar: string;
  position: string;
  phoneNumber: string;
  email: string;
  location: string;
  git: string;
  linkedin: string;
  cv: string;
}
