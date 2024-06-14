import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CustomOutlet } from '../../helpers/CustomOutlet/CustomOutlet';
import { routers } from '../../helpers/routes';
import { Navigation } from './components/Navigations';
import { ContactInformation } from './components/ContactInformation';
import { HiAcademicCap } from 'react-icons/hi2';
import { FaAddressCard } from 'react-icons/fa';
import { PiProjectorScreenChartFill } from 'react-icons/pi';

export interface IOptions {
  name: string;
  patch: string;
  image: React.ReactNode;
}

const option: IOptions[] = [
  {
    name: 'About',
    patch: routers.home,
    image: <FaAddressCard />,
  },
  {
    name: 'Resume',
    patch: routers.resume,
    image: <HiAcademicCap />,
  },
  {
    name: 'Project',
    patch: routers.projects,
    image: <PiProjectorScreenChartFill />,
  },
];

const Layout = () => {
  const [selectedTab, setSelectedTab] = useState<string>(option[0].name);

  return (
    <div className="flex gap-[6%]">
      <aside className="relative flex-grow">
        <ContactInformation />
      </aside>
      <div className="">
        <Navigation
          option={option}
          selectedTab={selectedTab}
          setSelectedTab={setSelectedTab}
        />
        <AnimatePresence mode="wait">
          <motion.main
            key={selectedTab ? selectedTab : 'empty'}
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -10, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="min-h-[510px] w-[800px] max-w-[850px] rounded-[10px] bg-[#fff] p-[40px]"
          >
            <CustomOutlet />
          </motion.main>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Layout;
