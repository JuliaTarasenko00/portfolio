import { Education } from '../../components/Education/Education';
import { Experience } from '../../components/Experience/Experience';
import { Summary } from '../../components/Summary/Summary';
import { Projects } from '../../components/Projects/Projects';
import { AboutMe } from '../../components/AboutMe/AboutMe';

export default function Main() {
  return (
    <>
      <Summary />
      <AboutMe />
      <Experience />
      <Education />
      <Projects />
    </>
  );
}
