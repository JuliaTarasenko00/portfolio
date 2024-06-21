import { useState } from 'react';
import { options } from './options';
import { motion, AnimatePresence } from 'framer-motion';

export default function MainPage() {
  const [selectedTab, setSelectTab] = useState(options[0]);

  return (
    <main className="min-h-[500px] w-[800px] rounded-[20px] bg-[#fff] p-[20px]">
      <ul className="flex justify-between border-b-[1.8px] border-b-[#8080807b]">
        {options.map((el) => (
          <li
            className={`relative cursor-pointer px-[30px] py-[10px] ${el === selectedTab && 'bg-[#8080807b]'} rounded-t-[10px]`}
            onClick={() => setSelectTab(el)}
            key={el.nameTab}
          >
            <p
              className={`flex items-center gap-[3px] ${el.nameTab === selectedTab.nameTab ? 'text-[#fff]' : 'text-main_color'} `}
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
            <h2 className="text-[20px] italic text-main_color">UK</h2>
            <h2 className="text-[20px] italic text-main_color">EN</h2>
          </div>
          <div className="flex justify-between">
            {' '}
            {selectedTab && selectedTab.content}
          </div>
        </motion.section>
      </AnimatePresence>
    </main>
  );
}
