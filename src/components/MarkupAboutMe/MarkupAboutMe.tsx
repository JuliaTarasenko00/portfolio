import { motion } from 'framer-motion';
import { IAboutMe, TAboutMe } from '../../types/typeAboutMe';

const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { x: 20, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
  },
};

export const MarkupAboutMe = ({ data }: { data: IAboutMe }) => {
  return (
    <>
      <h2 className="text-[28px] font-bold italic text-main_color after:relative after:bottom-[10px] after:left-[10px] after:inline-block after:h-[2px] after:w-[130px] after:translate-y-[3px] after:bg-[#eaa70c] after:content-['']">
        About
      </h2>
      <p className="mt-[5px] w-[650px] text-[13px] leading-[1.3] tracking-wider text-gray-500">
        {data.information_aboutme}
      </p>
      <div>
        <h3 className="my-[10px] text-[25px] font-semibold italic text-main_color">
          What I Do?
        </h3>
        <motion.ul
          initial="hidden"
          variants={container}
          animate="visible"
          className="relative flex flex-wrap justify-center gap-[10px]"
        >
          {data.what_do.map(({ image, id, name, description }: TAboutMe) => (
            <motion.li
              variants={item}
              key={id}
              className="style-item flex w-[350px] items-start gap-[9px] rounded-[10px] p-[13px] first:before:content-['']"
            >
              <img
                src={image}
                alt={name}
                width={50}
                height={50}
                className="h-[50px] w-[50px] rounded-[3px] object-cover"
              />
              <div>
                <h4 className="mb-[5px] text-[18px] font-medium leading-[1] tracking-wider">
                  {name}
                </h4>
                <p className="w-[250px] text-justify text-[15px] leading-[1.2] tracking-wider">
                  {description}
                </p>
              </div>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </>
  );
};
