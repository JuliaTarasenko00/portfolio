import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

import { token } from '../../i18n/token';
import { SocialMedial } from '../ui/SocialMedial';
import { useMainInformation } from '../../helpers/context/mainInformarion/useMainInformation';
import { IContactInformation } from '../../types/typeContactInformation';
import { siteRoute } from '../../helpers/routes';

export const Summary = () => {
  const { data } = useMainInformation();
  const { t } = useTranslation();

  return (
    <section className="pt-[20px] xl:pt-[40px]" id={siteRoute.main}>
      <div className="container relative">
        <div className="relative mb-[50px]">
          <motion.h1
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-[25px] italic leading-[1.1] tracking-[0.03em] text-[#fff] md:text-[50px] lg:text-[80px] xl:text-[100px]"
          >
            ...{data?.position}...
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="mt-[20px] text-balance text-[12px] leading-[1.33] tracking-[0.03em] text-[#919090] md:max-w-[400px] lg:max-w-[670px] lg:text-[14px] xl:text-[18px]"
          >
            {t(token.title.goal)}
          </motion.p>
        </div>
        <motion.div
          className="right-[30px] top-[30%] ml-auto mt-[10px] w-[170px] max-w-[100%] rounded-[30px] bg-[#fff] py-[5px] md:absolute lg:w-[220px] lg:py-[10px] xl:top-[50%] xl:w-[270px]"
          whileHover={{ scale: [null, 1, 1.1] }}
          transition={{ duration: 0.4 }}
        >
          <a
            href={`#${siteRoute.projects}`}
            className="block w-full text-center text-[20px] italic text-[#000]"
          >
            {t(token.title.projects)}
          </a>
        </motion.div>
        <SocialMedial data={data as IContactInformation} />
      </div>
    </section>
  );
};
