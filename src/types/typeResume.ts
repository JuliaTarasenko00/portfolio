export interface IEducation {
  start_education: string;
  end_education: string;
  degree: string;
  programme_subject: string | undefined;
  name_organization: string;
}

export interface IExperience {
  start_work: string;
  end_work: string;
  position: string;
  name_organization: string;
}

export interface IWorkSkills {
  name_skill: string;
  image: string;
  id: string;
}
