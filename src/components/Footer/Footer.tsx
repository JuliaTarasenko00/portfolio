import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

import { token } from '../../i18n/token';
import { useMainInformation } from '../../helpers/context/mainInformarion/useMainInformation';
import { SocialMedial } from '../ui/SocialMedial';
import { siteRoute } from '../../helpers/routes';

export const Footer = () => {
  const { t } = useTranslation();
  const { data } = useMainInformation();

  const nameArr = data?.name.split(' ') || '';

  const options = [
    {
      name: t(token.title.main),
      href: siteRoute.main,
    },
    {
      name: t(token.title.about),
      href: siteRoute.about,
    },
    {
      name: t(token.title.experience),
      href: siteRoute.work,
    },
    {
      name: t(token.title.education),
      href: siteRoute.education,
    },
  ];

  return (
    <div className="container py-[30px]">
      <h2 className="mb-[20px] text-[15px] font-bold text-[#f5f5f5] md:text-[25px] xl:mb-[50px]">
        ../{t(token.title.contacts)}...
      </h2>
      <div className="block items-start justify-between md:flex">
        <div className="relative">
          <h3 className="text-lg font-bold tracking-tight text-[#f5f5f5] md:w-[300px] md:text-[35px] lg:w-[400px] lg:text-7xl">
            <span className="md:block md:text-center">{nameArr[0]} </span>
            <span className="md:block md:text-end">{nameArr[1]}</span>
          </h3>
          <p className="text-lg italic text-[#f5f5f5] md:absolute md:bottom-[-35px] md:left-0 md:max-w-[180px] md:text-[#a6a6a6] lg:bottom-[0] lg:left-[40px]">
            {data?.position}
          </p>
        </div>
        <div className="">
          <ul className="mb-[10px] flex items-center justify-between gap-[15px]">
            {options.map(({ name, href }) => (
              <motion.li
                key={href}
                whileHover={{ scale: 1.5 }}
                whileTap={{ scale: 1 }}
                transition={{ duration: 0.3, ease: 'easeOut' }}
                className="text-[14px] text-[#a6a6a6] hover:text-[#fff]"
              >
                <a href={`#${href}`}>{name}</a>
              </motion.li>
            ))}
          </ul>
          <div className="max-w-[300px] place-self-center rounded-[25px] border-[0.75px] border-[#ffffff71] p-[15px]">
            <p className="text-[20px] font-thin text-[#f5f5f5d6]">
              {' '}
              {t(token.site.title)}
            </p>
            <p className="text-[12px] text-[#f5f5f5]">
              {t(token.site.handcrafted)} /
            </p>
            <p className="text-balance text-[12px] text-[#f5f5f5]">
              {t(token.site.powered)}
            </p>
          </div>
        </div>
      </div>
      <SocialMedial data={data}></SocialMedial>
    </div>
  );
};
