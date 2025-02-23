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
      <h2 className="mb-[50px] text-[25px] font-bold text-[#fff]">
        ../{t(token.title.contacts)}...
      </h2>
      <div className="flex items-start justify-between">
        <div className="relative">
          <h3 className="w-[400px] text-7xl font-bold tracking-tight text-[#f5f5f5]">
            <span className="block text-center">{nameArr[0]}</span>
            <span className="block text-end">{nameArr[1]}</span>
          </h3>
          <p className="absolute bottom-[0] left-[40px] max-w-[180px] text-lg italic text-[#a6a6a6]">
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
          <div className="rounded-[25px] border-[0.75px] border-[#ffffff71] p-[15px]">
            <p className="text-[20px] font-thin text-[#f5f5f5d6]">
              {' '}
              {t(token.site.title)}
            </p>
            <p className="text-[12px] text-[#f5f5f5]">
              {t(token.site.handcrafted)} /
            </p>
            <p className="text-[12px] text-[#f5f5f5]">
              {t(token.site.powered)}
            </p>
          </div>
        </div>
      </div>
      <SocialMedial data={data}></SocialMedial>
    </div>
  );
};
