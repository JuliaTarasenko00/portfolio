import { FC } from 'react';
import { motion } from 'framer-motion';
import { GrLinkedinOption } from 'react-icons/gr';
import { MdEmail } from 'react-icons/md';
import { TbBrandGithubFilled } from 'react-icons/tb';
import { BsFileTextFill } from 'react-icons/bs';
import { BiLogoTelegram } from 'react-icons/bi';
import { IContactInformation } from '../../types/typeContactInformation';

interface ISocialMedial {
  data: IContactInformation | undefined;
}

type TOptions = {
  name: string;
  href: string | undefined;
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
  'flex gap-[5px] italic items-center max-w-max  rounded-[30px] border-[1px] text-[#c5c5c5] text-[12px] md:text-[14px] border-[#7a7a7a] px-[10px] py-[5px] md:px-[15px] md:py-[10px] xl:px-[20px] xl:py-[10px]';

const styleSpan =
  'xl:h-[25px] xl:w-[25px] md:w-[20px] md:h-[20px] h-[15px] w-[15px] text-[#fff]';

export const SocialMedial: FC<ISocialMedial> = ({ data }) => {
  const options: TOptions[] = [
    { name: 'LinkedIn', href: data?.linkedin, icon: <GrLinkedinOption /> },
    { name: 'Email', href: data?.email, icon: <MdEmail /> },
    { name: 'GitHub', href: data?.git, icon: <TbBrandGithubFilled /> },
    { name: 'Telegram', href: data?.telegram, icon: <BiLogoTelegram /> },
    { name: 'CV', href: data?.cv, icon: <BsFileTextFill /> },
  ];

  return (
    <motion.ul
      className={`${container} mx-auto mt-[34px] flex flex-wrap items-start justify-start gap-[8px] md:w-[590px] md:items-center md:justify-center xl:w-[700px] xl:gap-[15px]`}
      variants={container}
      initial="hidden"
      animate="visible"
    >
      {options.map(({ name, href, icon }: TOptions) => (
        <motion.li
          key={name}
          className={`item ${name === 'GitHub' ? 'md:flex-[1] md:place-items-center' : ''} `}
          variants={item}
        >
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
