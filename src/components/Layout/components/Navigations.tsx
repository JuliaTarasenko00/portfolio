import { Variants, motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';
import { IOptions } from '../Layout';
import { FC, useState } from 'react';
import { GoTriangleDown } from 'react-icons/go';
import { useLanguage } from '../../../helpers/context/useLanguage';

interface INavigation {
  option: IOptions[];
  selectedTab: string;
  setSelectedTab: (el: string) => void;
}

const itemVariants: Variants = {
  open: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring', stiffness: 300, damping: 24 },
  },
  closed: { opacity: 0, y: 20, transition: { duration: 0.2 } },
};

export const Navigation: FC<INavigation> = ({
  option,
  selectedTab,
  setSelectedTab,
}) => {
  const { currentLanguage, language, setCurrentLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <nav className="mb-[10%] flex gap-[15px]">
      <ul className="ml-auto flex max-w-max justify-end gap-[10px] rounded-[20px] bg-[#eaa70c] p-[10px]">
        {option.map((item: IOptions) => (
          <li
            key={item.name}
            className={item.name === selectedTab ? 'selected' : ''}
            onClick={() => setSelectedTab(item.name)}
          >
            <NavLink
              to={item.patch}
              style={({ isActive }) => ({
                color: isActive ? '#8c8b89' : '',
                cursor: isActive ? 'context-menu' : '',
              })}
              className="flex flex-col items-center rounded-[10px] bg-[#fff] px-[15px] py-[10px] text-main_color transition-colors duration-350 ease-in-out hover:text-[#f9b058] focus:text-[#f9b058]"
            >
              <span className="block h-[20px] w-[20px]"> {item.image}</span>
              {item.name}
            </NavLink>
          </li>
        ))}
      </ul>
      <motion.div initial={false} animate={isOpen ? 'open' : 'closed'}>
        <motion.button
          whileTap={{ scale: 0.97 }}
          className="flex items-center gap-[5px] uppercase text-[#fff]"
          onClick={() => setIsOpen(!isOpen)}
        >
          {currentLanguage}
          <motion.div
            variants={{
              open: { rotate: 180 },
              closed: { rotate: 0 },
            }}
            transition={{ duration: 0.2 }}
            style={{ originY: 0.55 }}
          >
            <GoTriangleDown />
          </motion.div>
        </motion.button>
        <motion.ul
          variants={{
            open: {
              clipPath: 'inset(0% 0% 0% 0% round 10px)',
              transition: {
                type: 'spring',
                bounce: 0,
                duration: 0.7,
                delayChildren: 0.3,
                staggerChildren: 0.05,
              },
            },
            closed: {
              clipPath: 'inset(10% 50% 90% 50% round 10px)',
              transition: {
                type: 'spring',
                bounce: 0,
                duration: 0.3,
              },
            },
          }}
          style={{ pointerEvents: isOpen ? 'auto' : 'none' }}
        >
          {language.map((name, index) => (
            <motion.li
              variants={itemVariants}
              onClick={() => {
                setCurrentLanguage(name);
                setIsOpen(!isOpen);
              }}
              key={index}
            >
              <p
                className={`${currentLanguage === name ? 'cursor-no-drop text-[grey]' : 'cursor-pointer text-[#fff]'}`}
              >
                {' '}
                {name}
              </p>
            </motion.li>
          ))}
        </motion.ul>
      </motion.div>
    </nav>
  );
};
