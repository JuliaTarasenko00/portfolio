import { useCallback, useEffect, useState } from 'react';
import style from './loader.module.css';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { token } from '../../../i18n/token';

export default function Loader() {
  const [time, setTime] = useState<number>(0);
  const { t } = useTranslation();

  const updateTime = useCallback(() => {
    setTime((prev: number) => (prev < 100 ? prev + 1 : 100));
  }, []);

  useEffect(() => {
    const interval = setInterval(updateTime, 100);
    return () => clearInterval(interval);
  }, [updateTime]);

  return (
    <div className="absolute top-0 h-[100vh] w-full bg-[#121212]">
      <div className={style.loader}>
        {time >= 5 && (
          <p className="absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] text-[20px] italic text-[#fff]">
            {time}%
          </p>
        )}
      </div>
      {time === 100 && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 3 }}
          className="absolute bottom-[20%] left-[50%] translate-x-[-50%] italic"
        >
          {t(token.loader.title)}
        </motion.p>
      )}
    </div>
  );
}
