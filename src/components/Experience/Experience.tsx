import { motion } from 'framer-motion';
import { differenceInMonths, differenceInYears } from 'date-fns';
import { IntlProvider, FormattedMessage } from 'react-intl';
import { useTranslation } from 'react-i18next';

import { useFetchExperience } from './useFetchExperience';
import { useLanguage } from '../../helpers/context/languageContext/useLanguage';
import { token } from '../../i18n/token';
import { siteRoute } from '../../helpers/routes';

const messages = {
  uk: {
    month:
      '{count, plural, one {місяць} few {місяці} many {місяців} other {місяця}}',
    year: '{count, plural, one {рік} few {роки} many {років} other {роки}}',
  },
  en: {
    month:
      '{count, plural, one {month} few {mounts} many {mounts} other {mounts}}',

    year: '{count, plural, one {year} few {years} many {years} other {years}}',
  },
};

export const Experience = () => {
  const { data } = useFetchExperience();
  const { currentLanguage } = useLanguage();
  const { t } = useTranslation();

  const formatDate = (stringData: string): Date => {
    if (stringData === 'now') {
      return new Date();
    }

    const [month, year]: Array<number> = stringData
      .split('.')
      .map((el) => Number(el));

    return new Date(year, month - 1);
  };

  const calculateDifference = (start: string, end: string) => {
    const startDate: Date = formatDate(start);
    const endDate: Date = formatDate(end);
    const years: number = differenceInYears(endDate, startDate);
    const months: number = differenceInMonths(endDate, startDate) % 12;

    return { years, months };
  };

  return (
    <section className="pt-[20px] xl:pt-[50px]" id={siteRoute.work}>
      <div className="container relative">
        <h2 className="text-end text-[35px] font-bold italic text-[#fff] md:text-[50px] lg:text-[60px] xl:text-[70px]">
          {'<'}
          {t(token.title.experience)}
          {'/>'}
        </h2>
        <ul>
          {data?.map(
            ({ start_work, end_work, name_organization, position, _id }) => {
              const { years, months } = calculateDifference(
                start_work,
                end_work,
              );

              return (
                <motion.li
                  whileHover={{ scale: [null, 1, 1.1] }}
                  transition={{ duration: 0.3 }}
                  key={_id}
                  className="grid grid-cols-2 grid-rows-2 place-items-center items-center border-b border-t border-[#4b4a4a] px-[30px] py-[10px] md:grid-cols-3 md:grid-rows-none md:place-items-start"
                >
                  <div>
                    <p className="mb-[4px] text-[12px] leading-[1] tracking-[0.01em] text-[#c7c7c7] lg:text-[20px]">
                      {start_work} - {end_work}
                    </p>
                    <div className="flex items-center gap-[8px] text-[10px] italic text-[grey] lg:text-[13px]">
                      {years > 0 && (
                        <IntlProvider
                          locale={currentLanguage}
                          messages={messages[currentLanguage]}
                        >
                          <p>
                            {`${years} `}
                            <FormattedMessage
                              id="year"
                              values={{ count: years }}
                            />
                          </p>
                        </IntlProvider>
                      )}
                      {months > 0 && (
                        <IntlProvider
                          locale={currentLanguage}
                          messages={messages[currentLanguage]}
                        >
                          <p>
                            {`${months} `}
                            <FormattedMessage
                              id="month"
                              values={{ count: months }}
                            />
                          </p>
                        </IntlProvider>
                      )}
                    </div>
                  </div>
                  <p className="text-[14px] text-[#f5f5f5] md:justify-self-start lg:text-[20px]">
                    {name_organization}
                  </p>
                  <p className="col-span-2 place-self-center text-center text-[15px] leading-[1] tracking-[0.04em] text-[#f5f5f5] md:col-span-1 md:justify-self-start md:text-start lg:text-[25px]">
                    {position}
                  </p>
                </motion.li>
              );
            },
          )}
        </ul>
      </div>
    </section>
  );
};
