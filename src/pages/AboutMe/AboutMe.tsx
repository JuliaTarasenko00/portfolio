import aboutMe from '../../example/about_me.json';
import { IAboutMe, TAboutMe } from '../../types/typeAboutMe';

const data: IAboutMe = aboutMe;

export default function AboutMe() {
  return (
    <section className="relative">
      <h2 className="text-[28px] font-bold italic text-main_color after:relative after:bottom-[10px] after:inline-block after:h-[2px] after:w-[130px] after:translate-y-[3px] after:bg-[#eaa70c] after:content-['']">
        About
      </h2>
      <p className="mt-[5px] w-[650px] text-[12px] text-gray-500">
        {data.information_aboutme}
      </p>
      <div>
        <h3>What I Do?</h3>
        <ul>
          {data.what_do.map(({ image, id, name, description }: TAboutMe) => (
            <li key={id}>
              <img src={image} alt={name} width={50} height={50} />
              <h4>{name}</h4>
              <p>{description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
