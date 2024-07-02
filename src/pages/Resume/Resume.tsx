import { MarkupResume } from '../../components/MarkupResume/MarkupResume';
import experience from '../../example/experience.json';
import skills from '../../example/work_skills.json';
import { IEducation, IExperience, IWorkSkills } from '../../types/typeResume';
import { useResumeRequest } from './useResumeRequest';

const experienceList: IExperience[] = experience;
const skillsList: IWorkSkills[] = skills;

export default function Resume() {
  const { educationList, isPendingEducation } = useResumeRequest();
  return (
    <section className="w-[100%]">
      <MarkupResume
        educationList={educationList as IEducation[]}
        isPendingEducation={isPendingEducation}
        experienceList={experienceList}
        skillsList={skillsList}
      />
    </section>
  );
}
