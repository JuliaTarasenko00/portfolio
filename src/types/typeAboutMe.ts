export interface IAboutMe {
  information_aboutme: string;
  what_do: Array<TAboutMe>;
  id: string;
}

export type TAboutMe = {
  image: string;
  name: string;
  description: string;
  id: string;
};
