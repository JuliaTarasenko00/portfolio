import { MarkupResume } from '../../components/MarkupResume/MarkupResume';
import education from '../../example/education.json';
import experience from '../../example/experience.json';
import skills from '../../example/work_skills.json';
import { IEducation, IExperience, IWorkSkills } from '../../types/typeResume';

const educationList: IEducation[] = education;
const experienceList: IExperience[] = experience;
const skillsList: IWorkSkills[] = skills;

export default function Resume() {
  return (
    <section className="w-[100%]">
      <MarkupResume
        educationList={educationList}
        experienceList={experienceList}
        skillsList={skillsList}
      />
    </section>
  );
}
