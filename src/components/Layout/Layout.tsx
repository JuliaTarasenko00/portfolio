import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CustomOutlet } from '../../helpers/CustomOutlet/CustomOutlet';
import { routers } from '../../helpers/routes';
import { Navigation } from './components/Navigations';
import { ContactInformation } from './components/ContactInformation';

export interface IOptions {
  name: string;
  patch: string;
}

const option: IOptions[] = [
  {
    name: 'About',
    patch: routers.home,
  },
  {
    name: 'Resume',
    patch: routers.resume,
  },
  {
    name: 'Project',
    patch: routers.projects,
  },
];

const Layout = () => {
  const [selectedTab, setSelectedTab] = useState<string>(option[0].name);

  return (
    <>
      <div className="grid grid-cols-[1fr_1fr] gap-[50px]">
        <ContactInformation />
        <div className="col-[2]">
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
            >
              <CustomOutlet />
            </motion.main>
          </AnimatePresence>
        </div>
      </div>
    </>
  );
};

export default Layout;
