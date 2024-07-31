import { motion } from 'framer-motion';
import { differenceInMonths, differenceInYears } from 'date-fns';
import { IntlProvider, FormattedMessage } from 'react-intl';
import { useFetchExperience } from './useFetchExperience';
import { useLanguage } from '../../helpers/context/languageContext/useLanguage';
import { token } from '../../i18n/token';
import { useTranslation } from 'react-i18next';

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
    <section className="pt-[50px]">
      <div className="container relative">
        <div className="circle bottom-[-30%] left-[-25%] h-[390px] w-[390px]"></div>
        <h2 className="text-end text-[90px] font-bold text-[#fff]">
          {t(token.title.experience)}
        </h2>
        <ul>
          {data?.map(
            ({ start_work, end_work, name_organization, position }) => {
              const { years, months } = calculateDifference(
                start_work,
                end_work,
              );
              return (
                <motion.li
                  whileHover={{ scale: [null, 1, 1.1] }}
                  transition={{ duration: 0.3 }}
                  key={name_organization}
                  className="grid grid-cols-3 items-center border-b border-t border-[#4b4a4a] px-[30px] py-[10px]"
                >
                  <div>
                    <p className="mb-[4px] text-[20px] leading-[1] tracking-[0.01em] text-[#c7c7c7]">
                      {start_work} - {end_work}
                    </p>
                    <div className="flex items-center gap-[8px] text-[13px] italic text-[grey]">
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
                  <p className="text-[20px] text-[#fff]">{name_organization}</p>
                  <p className="text-[25px] leading-[1] tracking-[0.04em] text-[#fff]">
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
