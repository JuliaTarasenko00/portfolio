import { useTranslation } from 'react-i18next';

import { useFetchEducation } from './useFetchEducation';
import { token } from '../../i18n/token';

export const Education = () => {
  const { t } = useTranslation();
  const { data } = useFetchEducation();

  return (
    <section className="overflow-hidden pb-[60px] pt-[45px]">
      <div className="container relative">
        <h2 className="text-[70px] font-bold italic text-[#fff]">
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
                className="hover:transition_custom focus:transition_custom group grid grid-cols-3 items-center gap-[20px] border-b border-t border-[#4b4a4a] px-[30px] py-[10px] text-[#fff] hover:border-[transparent] hover:bg-[#ffffffde] hover:text-[#000] focus:border-[transparent] focus:bg-[#ffffffde] focus:text-[#000]"
              >
                <p className="group-hover:transition_custom group-focus:transition_custom mb-[4px] text-[20px] leading-[1] tracking-[0.01em] text-[#c7c7c7] group-hover:text-[#000] group-focus:text-[#000]">
                  {start_education} - {end_education}
                </p>
                <p className="text-[20px]">{name_organization}</p>
                <p className="text-[25px] leading-[1] tracking-[0.04em]">
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
