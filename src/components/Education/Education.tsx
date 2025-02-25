import { useTranslation } from 'react-i18next';

import { useFetchEducation } from './useFetchEducation';
import { token } from '../../i18n/token';
import { siteRoute } from '../../helpers/routes';

export const Education = () => {
  const { t } = useTranslation();
  const { data } = useFetchEducation();

  return (
    <section
      className="overflow-hidden pb-[60px] pt-[45px]"
      id={siteRoute.education}
    >
      <div className="container relative">
        <h2 className="text-[35px] font-bold italic text-[#fff] md:text-[50px] lg:text-[60px] xl:text-[70px]">
          {'<'}
          {t(token.title.education)}
          {'/>'}
        </h2>
        <ul>
          {data?.map(
            ({
              end_education,
              start_education,
              name_organization,
              degree,
              _id,
            }) => (
              <li
                key={_id}
                className="hover:transition_custom focus:transition_custom group grid grid-rows-3 place-items-center justify-center gap-[5px] border-b border-t border-[#4b4a4a] px-[30px] py-[10px] hover:border-[transparent] hover:bg-[#ffffffde] hover:text-[#000] focus:border-[transparent] focus:bg-[#ffffffde] focus:text-[#000] md:grid-cols-3 md:grid-rows-1 md:place-items-start"
              >
                <p className="group-hover:transition_custom group-focus:transition_custom text-[12px] leading-[1] tracking-[0.01em] text-[#f5f5f5] group-hover:text-[#000] group-focus:text-[#000] lg:text-[20px]">
                  {start_education} - {end_education}
                </p>
                <p className="text-center text-[14px] md:col-span-1 md:justify-self-start md:text-start lg:text-[20px]">
                  {name_organization}
                </p>
                <p className="text-[15px] leading-[1] tracking-[0.04em] md:place-self-center lg:justify-self-start lg:text-[20px]">
                  {degree}
                </p>
              </li>
            ),
          )}
        </ul>
      </div>
    </section>
  );
};
