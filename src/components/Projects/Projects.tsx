import { useRef } from 'react';
import { useQuery } from '@tanstack/react-query';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useTranslation } from 'react-i18next';

import { useLanguage } from '../../helpers/context/languageContext/useLanguage';
import { getProjectsByLanguage } from '../../api/projects';
import { IProject } from '../../types/typeProject';
import { token } from '../../i18n/token';
import { TbBrandGithubFilled } from 'react-icons/tb';
import { GoArrowUpRight } from 'react-icons/go';
import { RiPagesFill } from 'react-icons/ri';
import { siteRoute } from '../../helpers/routes';

export const Projects = () => {
  const { t } = useTranslation();
  const { currentLanguage: language } = useLanguage();
  const { data } = useQuery<IProject[]>({
    queryKey: ['projectsByLanguage', language],
    queryFn: () => getProjectsByLanguage(language),
  });

  const galleryRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: galleryRef,
    offset: ['start start', 'end end'],
  });

  const x = useTransform(
    scrollYProgress,
    [0, 1],
    ['0%', `-${((data?.length as number) - 1) * 100}%`],
  );

  return (
    <>
      <section
        id={siteRoute.projects}
        ref={galleryRef}
        className="container relative py-[40px]"
        style={{
          height: data?.length ? `${(data?.length - 1) * 100}vh` : '50vh',
        }}
      >
        <div className="sticky top-[70px] flex h-max flex-col justify-center gap-[10px] overflow-hidden">
          <h2 className="text-end text-[70px] font-bold italic text-[#fff]">
            {'<'}
            {t(token.title.projects)} {'/>'}
          </h2>
          <motion.ul style={{ x }} className="flex">
            {data?.map(
              ({
                image1,
                nameProject,
                _id,
                technologyStack,
                image2,
                linkGit,
                livePage,
                description,
              }) => {
                const technologyArray: Array<string> =
                  technologyStack.split(',');
                const technologyMarkup = technologyArray.map((el) => (
                  <li
                    key={el}
                    className="w-max rounded-[25px] border-[1px] border-[#9a9a9a] px-[15px] py-[5px] text-[#ffffff] hover:bg-[#fff] hover:text-[#000] hover:transition-colors hover:duration-[350ms] hover:ease-in"
                  >
                    {el}
                  </li>
                ));

                return (
                  <motion.li
                    initial={{ opacity: 0, y: 100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0 }}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                    key={_id}
                    className="flex w-full flex-[0_0_auto] flex-col items-center justify-center"
                  >
                    <div className="flex items-center justify-center gap-[20px]">
                      <div className="flex items-start gap-[8px]">
                        <img
                          src={image1}
                          alt={nameProject}
                          width={500}
                          height={300}
                          className="max-h-[500px] w-[300px] rounded-[20px] object-fill"
                        />
                        <div className="relative max-h-[250px] w-[130px] overflow-hidden rounded-[20px]">
                          <div className="absolute top-0 z-10 h-[100%] w-[100%] bg-[#2d2d2d94]"></div>
                          <img
                            src={image2}
                            alt={nameProject}
                            width={130}
                            height={250}
                            className="object-fill"
                          />
                          <a
                            href={livePage}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="absolute right-[35%] top-[50%] z-20 w-max translate-x-[-30%] translate-y-[-50%] rounded-[50px] border-[1px] border-[#fff] p-[10px] hover:cursor-help"
                          >
                            <span className="block h-[20px] w-[20px]">
                              <RiPagesFill />
                            </span>
                            <span className="absolute left-[30px] top-[0] block max-w-[40px] rounded-[20px] bg-[#fff] p-[10px]">
                              <GoArrowUpRight className="h-[20px] w-[20px] text-[#000]" />
                            </span>
                          </a>
                        </div>
                      </div>
                      <div className="relative max-w-[600px]">
                        <h3 className="max-w-max border-b-[1px] pb-[1px] text-[23px] font-medium">
                          {nameProject}
                        </h3>
                        <ul className="my-[20px] flex w-[100%] max-w-[400px] flex-wrap items-center gap-[15px]">
                          {technologyMarkup}
                        </ul>
                        <div className="relative">
                          <p className="text-[13px] text-[#d4d4d4]">
                            {description}
                          </p>
                          {!!linkGit && (
                            <motion.a
                              href={linkGit}
                              whileHover={{ scale: 1.2 }}
                              whileTap={{ scale: 0.8 }}
                              transition={{
                                type: 'spring',
                                stiffness: 400,
                                damping: 17,
                              }}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="absolute right-[-25px] top-[-35%] w-max rounded-[50px] border-[1px] border-[#fff] p-[10px]"
                            >
                              <span className="block h-[20px] w-[20px]">
                                <TbBrandGithubFilled />
                              </span>
                              <span className="absolute left-[30px] top-[0] block max-w-[40px] rounded-[20px] bg-[#fff] p-[10px]">
                                <GoArrowUpRight className="h-[20px] w-[20px] text-[#000]" />
                              </span>
                            </motion.a>
                          )}
                        </div>
                      </div>
                    </div>
                  </motion.li>
                );
              },
            )}
          </motion.ul>
        </div>
        {/* <motion.div
          className="fixed bottom-12 left-[0] right-[0] h-[3px] origin-center bg-[#ffffffbe]"
          style={{ scaleX: scrollYProgress }}
        /> */}
      </section>
    </>
  );
};
