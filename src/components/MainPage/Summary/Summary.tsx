import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { FaArrowRightLong } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
import { SocialMedial } from './components/SocialMedial';
import { useMainInformation } from '../../../helpers/context/mainInformarion/useMainInformation';
import { token } from '../../../i18n/token';
import { routers } from '../../../helpers/routes';
import { IContactInformation } from '../../../types/typeContactInformation';

export const Summary = () => {
  const { data } = useMainInformation();
  const { t } = useTranslation();

  return (
    <section className="mt-[40px]">
      <div className="container relative">
        <div className="relative mb-[50px]">
          <motion.h1
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-[100px] italic leading-[1.1] tracking-[0.03em] text-[#fff]"
          >
            ...{data?.position}...
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="mt-[20px] max-w-[670px] text-[18px] leading-[1.33] tracking-[0.03em] text-[#919090]"
          >
            {t(token.title.goal)}
          </motion.p>
        </div>
        <motion.div
          className="absolute right-0 top-[50%] ml-auto w-max"
          whileHover={{ scale: [null, 1, 1.1] }}
          transition={{ duration: 0.4 }}
        >
          <Link
            to={routers.projects}
            className="flex items-center justify-end gap-[10px]"
          >
            <span className="w-[270px] max-w-[100%] rounded-[30px] bg-[#fff] py-[10px] text-center text-[20px] italic text-[#000]">
              {t(token.title.projects)}
            </span>
            <span className="block rounded-[50%] bg-[#fff] p-[15px]">
              <FaArrowRightLong className="w-[20px] text-[#000]" />
            </span>
          </Link>
        </motion.div>
        <SocialMedial data={data as IContactInformation} />
      </div>
    </section>
  );
};
