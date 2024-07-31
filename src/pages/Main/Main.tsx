import { AboutMe } from '../../components/AboutMe/AboutMe';
import { Education } from '../../components/Education/Education';
import { Experience } from '../../components/Experience/Experience';
import { Summary } from '../../components/Summary/Summary';

export default function Main() {
  return (
    <>
      <Summary />
      <AboutMe />
      <Experience />
      <Education />
    </>
  );
}
