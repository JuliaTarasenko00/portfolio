import { FaAddressCard } from 'react-icons/fa6';
import { ContactInformation } from '../../components/MarkupForAdmin/ContactInformation/ContactInformation';
import { Education } from '../../components/MarkupForAdmin/Education';
import { Experience } from '../../components/MarkupForAdmin/Experience';
import { Project } from '../../components/MarkupForAdmin/Project';
import { PiProjectorScreenChartFill } from 'react-icons/pi';
import { HiAcademicCap } from 'react-icons/hi2';
import { MdWorkHistory } from 'react-icons/md';

interface IOptions {
  nameTab: string;
  icon: React.ReactNode;
  content: React.ReactNode;
}

export const options: IOptions[] = [
  {
    nameTab: 'Contact Information',
    content: <ContactInformation />,
    icon: <FaAddressCard />,
  },
  { nameTab: 'Education', content: <Education />, icon: <HiAcademicCap /> },
  { nameTab: 'Experience', content: <Experience />, icon: <MdWorkHistory /> },
  {
    nameTab: 'Project',
    content: <Project />,
    icon: <PiProjectorScreenChartFill />,
  },
];
