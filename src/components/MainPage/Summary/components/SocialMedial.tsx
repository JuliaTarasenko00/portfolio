import { FC } from 'react';
import { motion } from 'framer-motion';
import { GrLinkedinOption } from 'react-icons/gr';
import { MdEmail } from 'react-icons/md';
import { TbBrandGithubFilled } from 'react-icons/tb';
import { BsFileTextFill } from 'react-icons/bs';
import { BiLogoTelegram } from 'react-icons/bi';
import { IContactInformation } from '../../../../types/typeContactInformation';

interface ISocialMedial {
  data: IContactInformation;
}

type TOptions = {
  name: string;
  href: string;
  icon: React.ReactNode;
};

const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.4,
    },
  },
};

const item = {
  hidden: { y: 10, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

const styleLink =
  'flex gap-[5px] italic items-center max-w-max  rounded-[30px] border-[1px] text-[#c5c5c5] text-[14px] border-[#7a7a7a] px-[20px] py-[10px]';

const styleSpan = 'h-[25px] w-[25px] text-[#fff]';

export const SocialMedial: FC<ISocialMedial> = ({ data }) => {
  const options: TOptions[] = [
    { name: 'LinkedIn', href: data.linkedin, icon: <GrLinkedinOption /> },
    { name: 'Email', href: data.email, icon: <MdEmail /> },
    { name: 'GitHub', href: data.git, icon: <TbBrandGithubFilled /> },
    { name: 'Telegram', href: data.telegram, icon: <BiLogoTelegram /> },
    { name: 'CV', href: data.cv, icon: <BsFileTextFill /> },
  ];
  return (
    <motion.ul
      className={`${container} mt-[24px] flex items-center justify-center gap-[15px]`}
      variants={container}
      initial="hidden"
      animate="visible"
    >
      {options.map(({ name, href, icon }: TOptions) => (
        <motion.li key={name} className="item" variants={item}>
          {name !== 'Email' ? (
            <motion.a
              href={href}
              className={styleLink}
              target="_blank"
              whileHover={{ scale: 1.1 }}
              transition={{ type: 'spring', stiffness: 200, damping: 9 }}
              rel="noopener noreferrer"
            >
              <span className={styleSpan}>{icon}</span>
              {name}
            </motion.a>
          ) : (
            <motion.a
              className={styleLink}
              whileHover={{ scale: 1.1 }}
              transition={{ type: 'spring', stiffness: 200, damping: 9 }}
              href={`mailto:${href}`}
            >
              <span className={styleSpan}>{icon}</span>
              {name}
            </motion.a>
          )}
        </motion.li>
      ))}
    </motion.ul>
  );
};
