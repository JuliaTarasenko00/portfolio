import { useTranslation } from 'react-i18next';
import { FaGithub } from 'react-icons/fa6';
import { GoArrowUpRight } from 'react-icons/go';

import { useFetchSkills } from './useFetchSkills';
import { useMainInformation } from '../../helpers/context/mainInformarion/useMainInformation';
import { token } from '../../i18n/token';
import { siteRoute } from '../../helpers/routes';

const stileWrapper =
  ' group hover:transition_custom focus:transition_custom rounded-[20px] border-[1px] border-[#565656] bg-transparent p-[10px] xl:p-[20px] text-[#919090] hover:border-[transparent] hover:bg-[#ffffffde] hover:text-[#000] focus:border-[transparent] focus:bg-[#ffffffde] focus:text-[#000]';

const styleTitle =
  'mb-[15px] text-[25px] text-[#c1c1c1] group-hover:text-[#000] group-focus:text-[#000] group-hover:transition_custom group-focus:transition_custom font-medium underline';

const styleList = 'flex max-w-full flex-wrap gap-[2px]';

const styleItem = 'text-[15px] italic leading-[1.33] tracking-[0.03em]';

export const AboutMe = () => {
  const { front, style } = useFetchSkills();
  const { data } = useMainInformation();
  const { t } = useTranslation();

  return (
    <section className="pt-[40px]" id={siteRoute.about}>
      <div className="container relative">
        <h2 className="mb-[20px] text-end text-[15px] font-bold text-[#f5f5f5] xl:mb-[50px] xl:text-start">
          .../{t(token.title.about)} ...
        </h2>
        <p className="mx-auto mb-[20px] max-w-[650px] text-balance text-center text-[13px] font-normal leading-[1.33] tracking-[0.03em] text-[#cecece] md:text-[#f5f5f5] xl:mb-[40px] xl:text-[15px]">
          {t(token.title.description)}
        </p>
        <img
          src={data?.avatar}
          alt={data?.name}
          width={300}
          height={200}
          className="right-[10%] top-[33%] mx-[auto] mb-[15px] h-[200px] w-[180px] rounded-[20px] object-cover object-center xl:absolute xl:mb-[0] xl:h-[300px] xl:w-[280px]"
        />
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
          <div className="mt-[40px] flex items-center gap-[20px] xl:ml-[90px]">
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
