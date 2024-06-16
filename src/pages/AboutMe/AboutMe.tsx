import { MarkupAboutMe } from '../../components/MarkupAboutMe/MarkupAboutMe';
import aboutMe from '../../example/about_me.json';
import { IAboutMe } from '../../types/typeAboutMe';

const data: IAboutMe = aboutMe;

export default function AboutMe() {
  return (
    <section className="relative">
      <MarkupAboutMe data={data} />
    </section>
  );
}
