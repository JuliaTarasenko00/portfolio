import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { token } from '../../i18n/token';
import { FaArrowRightLong } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
import { routers } from '../../helpers/routes';
import { IContactInformation } from '../../types/typeContactInformation';
import { SocialMedial } from './components/SocialMedial';
import { useMainInformation } from '../../helpers/context/mainInformarion/useMainInformation';

export const Summary = () => {
  const { data } = useMainInformation();
  const { t } = useTranslation();

  return (
    <section className="mt-[40px]">
      <div className="container">
        <div className="relative mb-[50px]">
          <motion.h1
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-[100px] leading-[1.1] tracking-[0.03em] text-[#fff]"
          >
            {data?.position}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="absolute bottom-0 right-[20px] max-w-[670px] text-[18px] leading-[1.33] tracking-[0.03em] text-[#919090]"
          >
            {t(token.title.goal)}
          </motion.p>
        </div>
        <Link
          to={routers.projects}
          className="flex items-center justify-end gap-[10px]"
        >
          <span className="w-[270px] max-w-[100%] rounded-[30px] bg-[#fff] py-[10px] text-center text-[20px] italic text-[#000]">
            {t(token.title.project)}
          </span>
          <span className="block rounded-[50%] bg-[#fff] p-[15px]">
            <FaArrowRightLong className="w-[20px] text-[#000]" />
          </span>
        </Link>
        <SocialMedial data={data as IContactInformation} />
      </div>
    </section>
  );
};
