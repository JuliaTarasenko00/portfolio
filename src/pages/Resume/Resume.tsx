import { MarkupResume } from '../../components/MarkupResume/MarkupResume';
import skills from '../../example/work_skills.json';
import { IEducation, IExperience, IWorkSkills } from '../../types/typeResume';
import { useResumeRequest } from './useResumeRequest';

const skillsList: IWorkSkills[] = skills;

export default function Resume() {
  const {
    educationList,
    isPendingEducation,
    experienceList,
    isPendingExperience,
  } = useResumeRequest();

  return (
    <section className="w-[100%]">
      <MarkupResume
        educationList={educationList as IEducation[]}
        isPendingEducation={isPendingEducation}
        experienceList={experienceList as IExperience[]}
        isPendingExperience={isPendingExperience}
        skillsList={skillsList}
      />
    </section>
  );
}
