import { useTranslation } from 'react-i18next';
import { useFetchSkills } from './useFetchSkills';
import { token } from '../../i18n/token';
import { useMainInformation } from '../../helpers/context/mainInformarion/useMainInformation';
import { FaGithub } from 'react-icons/fa6';
import { GoArrowUpRight } from 'react-icons/go';

const stileWrapper =
  ' group hover:transition_custom focus:transition_custom rounded-[20px] border-[1px] border-[#565656] bg-transparent p-[20px] text-[#919090] hover:border-[transparent] hover:bg-[#ffffffde] hover:text-[#000] focus:border-[transparent] focus:bg-[#ffffffde] focus:text-[#000]';

const styleTitle =
  'mb-[15px] text-[25px] text-[#c1c1c1] group-hover:text-[#000] group-focus:text-[#000] group-hover:transition_custom group-focus:transition_custom font-medium underline';

const styleList = 'flex max-w-full flex-wrap gap-[2px]';

const styleItem = 'text-[15px] italic leading-[1.33] tracking-[0.03em]';

export const AboutMe = () => {
  const { front, style } = useFetchSkills();
  const { data } = useMainInformation();
  const { t } = useTranslation();

  return (
    <section className="pt-[40px]">
      <div className="container relative">
        <div className="circle right-[-20%] top-[-60px] h-[600px] w-[600px]"></div>
        <h2 className="mb-[50px] text-[15px] font-bold text-[#fff]">
          .../{t(token.title.about)} ...
        </h2>
        <p className="mx-auto mb-[40px] max-w-[650px] text-[15px] font-normal leading-[1.33] tracking-[0.03em]">
          {t(token.title.description)}
        </p>
        <div className="relative">
          <div className={`${stileWrapper} max-w-[500px]`}>
            <h3 className={styleTitle}>Front-end</h3>
            <ul className={styleList}>
              {front?.map(({ _id, name_skill }) => (
                <li key={_id} className={styleItem}>
                  {name_skill} /
                </li>
              ))}
            </ul>
          </div>
          <div className={`${stileWrapper} mt-[15px] max-w-[330px]`}>
            <h3 className={styleTitle}>Style</h3>
            <ul className={styleList}>
              {style?.map(({ _id, name_skill }) => (
                <li className={styleItem} key={_id}>
                  {name_skill} /
                </li>
              ))}
            </ul>
          </div>
          <img
            src={data?.avatar}
            alt={data?.name}
            width={300}
            height={200}
            className="absolute right-[10%] top-[0] h-[300px] w-[280px] rounded-[20px] object-cover object-center"
          />
          <div className="ml-[90px] mt-[40px] flex items-center gap-[20px]">
            <p className="w-[280px] text-[13px] text-[#c7c7c7]">
              {t(token.title.checkProjects)}
            </p>
            <a
              href={data?.git}
              target="_blank"
              className="relative flex items-center"
              rel="noopener noreferrer"
            >
              <span className="block h-[40px] w-[40px] text-[#fff]">
                <FaGithub />
              </span>
              <span className="absolute left-[33px] top-[-5px] block max-w-[40px] rounded-[20px] bg-[#fff] p-[10px]">
                <GoArrowUpRight className="h-[20px] w-[20px] text-[#000]" />
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
