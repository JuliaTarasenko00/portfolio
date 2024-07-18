import { useEffect, useState } from 'react';
import { options } from './options';
import { motion, AnimatePresence } from 'framer-motion';
import { currentUser, signOut } from '../../api/auth';
import { useAuth } from '../../helpers/context/authContext/useAuth';
import { toast } from 'react-toastify';
import { styleForToastity } from '../../components/ui/styleForToastity';
import { IAuth } from '../../types/authResult';

export default function MainPage() {
  const [selectedTab, setSelectTab] = useState(options[0]);
  const { setToken, token } = useAuth();

  useEffect(() => {
    if (token === '') return;

    const fetchData = async () => {
      try {
        const result: IAuth = await currentUser();
        setToken(result.token);
        return;
      } catch (error) {
        console.log('error: ', error);
        setToken('');
      }
    };
    fetchData();
  }, [setToken, token]);

  const logOut = async () => {
    try {
      await signOut();
      setToken('');
    } catch (error: any) {
      toast.error(error.message, styleForToastity);
    }
  };

  return (
    <main className="min-h-[500px] w-[800px] max-w-[100%] rounded-[20px] bg-[#fff] p-[20px]">
      <button
        type="button"
        onClick={logOut}
        className="absolute right-[100px] top-[10%] w-[200px] max-w-[100%] rounded-[10px] bg-[#8855ff] p-[15px] text-[#fff]"
      >
        Sign out
      </button>
      <ul className="flex flex-wrap justify-center border-b-[1.8px] border-b-[#8080807b] sm:justify-between">
        {options.map((el) => (
          <li
            className={`relative cursor-pointer px-[15px] py-[10px] sm:px-[30px] ${el === selectedTab && 'bg-[#8080807b]'} rounded-t-[10px]`}
            onClick={() => setSelectTab(el)}
            key={el.nameTab}
          >
            <p
              className={`flex items-center gap-[3px] text-[13px] sm:text-[18px] ${el.nameTab === selectedTab.nameTab ? 'text-[#fff]' : 'text-main_color'} `}
            >
              <span
                className={`block h-[25px] w-[25px] ${el.nameTab === selectedTab.nameTab ? 'text-[#8855ff]' : 'text-main_color'}`}
              >
                {el.icon}
              </span>{' '}
              {el.nameTab}
            </p>
            {el === selectedTab ? (
              <motion.div
                className="absolute bottom-[-1.8px] left-0 z-10 h-[1.8px] w-[100%] bg-[#8855ff]"
                layoutId="underline"
              />
            ) : null}
          </li>
        ))}
      </ul>
      <AnimatePresence mode="wait">
        <motion.section
          className="mt-[20px]"
          key={selectedTab ? selectedTab.nameTab : 'empty'}
          initial={{ x: 10, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: -10, opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          <div className="mb-[10px] grid grid-cols-2">
            <h2 className="hidden text-[20px] italic text-main_color sm:block">
              UK
            </h2>
            <h2 className="hidden text-[20px] italic text-main_color sm:block">
              EN
            </h2>
          </div>
          <div> {selectedTab && selectedTab.content}</div>
        </motion.section>
      </AnimatePresence>
    </main>
  );
}
