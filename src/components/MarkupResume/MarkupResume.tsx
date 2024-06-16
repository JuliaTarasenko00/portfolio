import { FC, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { IEducation, IExperience, IWorkSkills } from '../../types/typeResume';
import {
  container,
  item,
  styleItem,
  styleList,
  styleName,
  styleTitleItem,
  styleYear,
  styleTitle,
  styleImg,
} from './styleResume';
import { MdOutlineWorkHistory } from 'react-icons/md';
import { HiAcademicCap } from 'react-icons/hi2';

interface IMarkupResume {
  educationList: IEducation[];
  experienceList: IExperience[];
  skillsList: IWorkSkills[];
}

export const MarkupResume: FC<IMarkupResume> = ({
  educationList,
  experienceList,
  skillsList,
}) => {
  const controls = useAnimation();

  useEffect(() => {
    controls.start({
      x: [0, -skillsList.length * 50],
      transition: {
        repeat: Infinity,
        repeatType: 'mirror',
        duration: skillsList.length,
        ease: 'linear',
      },
    });
  }, [controls, skillsList.length]);

  return (
    <>
      <div className="flex justify-around">
        <div>
          <h2 className={styleTitle}>
            <HiAcademicCap className={styleImg} /> Education
          </h2>
          <motion.ul
            className={styleList}
            variants={container}
            initial="hidden"
            animate="visible"
          >
            {educationList.map(
              ({
                start_education,
                end_education,
                degree,
                programme_subject,
                name_organization,
                id,
              }: IEducation) => (
                <motion.li
                  key={id}
                  variants={item}
                  className={`${styleItem} bg-[#80808029] even:bg-[#eaa70c1c]`}
                >
                  <p className={styleYear}>
                    {start_education} - {end_education}
                  </p>
                  <h3 className={styleTitleItem}>
                    {degree}
                    {programme_subject && ','} {programme_subject}
                  </h3>
                  <p className={styleName}> {name_organization}</p>
                </motion.li>
              ),
            )}
          </motion.ul>
        </div>
        <div>
          <h2 className={styleTitle}>
            <MdOutlineWorkHistory className={styleImg} />
            Experience
          </h2>
          <motion.ul
            className={styleList}
            variants={container}
            initial="hidden"
            animate="visible"
          >
            {experienceList.map(
              ({ start_work, end_work, position, name_organization, id }) => (
                <motion.li
                  key={id}
                  variants={item}
                  className={`${styleItem} bg-[#80808029] odd:bg-[#eaa70c1c]`}
                >
                  <p className={styleYear}>
                    {start_work} - {end_work}
                  </p>
                  <h3 className={styleTitleItem}>{position}</h3>
                  <p className={styleName}>{name_organization}</p>
                </motion.li>
              ),
            )}
          </motion.ul>
        </div>
      </div>
      <div className="mt-[20px] max-w-full overflow-hidden p-[10px]">
        <h2 className={styleTitle}>Work Skills</h2>
        <motion.ul animate={controls} className="flex gap-[12px]">
          {skillsList.map(({ name_skill, id, image }) => (
            <li key={id} className="flex flex-col items-center gap-[2px]">
              <img
                src={image}
                alt={name_skill}
                width={70}
                height={70}
                className="h-[70px] min-w-[70px] rounded-[20px] object-contain"
              />
              <p className="text-[13px] italic text-main_color">{name_skill}</p>
            </li>
          ))}
        </motion.ul>
      </div>
    </>
  );
};
