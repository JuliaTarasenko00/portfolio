import { AboutMe } from '../../components/MainPage/AboutMe/AboutMe';
import { Education } from '../../components/MainPage/Education/Education';
import { Experience } from '../../components/MainPage/Experience/Experience';
import { Summary } from '../../components/MainPage/Summary/Summary';

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
