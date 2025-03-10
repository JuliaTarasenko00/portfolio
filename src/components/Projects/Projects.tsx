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
        className="container relative py-[15px] lg:py-[40px]"
        style={{
          height: data?.length ? `${(data?.length - 1) * 100}vh` : '50vh',
        }}
      >
        <div className="sticky top-[70px] flex h-max flex-col justify-center gap-[10px] overflow-hidden">
          <h2 className="text-end text-[35px] font-bold italic text-[#fff] md:text-[50px] lg:text-[60px] xl:text-[70px]">
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
                    className="w-max rounded-[25px] border-[1px] border-[#9a9a9a] px-[10px] py-[3px] text-[10px] text-[#ffffff] hover:bg-[#fff] hover:text-[#000] hover:transition-colors hover:duration-[350ms] hover:ease-in lg:px-[15px] lg:py-[5px] lg:text-[15px]"
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
                    className="flex h-max w-full flex-[0_0_auto] flex-col items-center justify-center pl-[10px] sm:pl-[0px]"
                  >
                    <div className="flex flex-col items-center justify-center gap-[10px] lg:flex-row lg:gap-[20px]">
                      <div className="flex items-start gap-[8px]">
                        <img
                          src={image1}
                          alt={nameProject}
                          loading="lazy"
                          width={500}
                          height={300}
                          className="w-[200px] rounded-[20px] object-fill md:max-h-[150px] md:w-[250px] lg:max-h-[500px] lg:w-[350px]"
                        />
                        <div className="relative h-[140px] w-[100px] overflow-hidden rounded-[20px] md:h-[166px] lg:h-[100%] lg:max-h-[250px] lg:w-[130px]">
                          <div className="absolute top-0 z-10 h-[100%] w-[100%] bg-[#2d2d2d94]"></div>
                          <img
                            src={image2}
                            alt={nameProject}
                            width={130}
                            height={250}
                            loading="lazy"
                            className="object-fill"
                          />
                          <a
                            href={livePage}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="absolute right-[35%] top-[50%] z-20 w-max translate-x-[-30%] translate-y-[-50%] rounded-[50px] border-[1px] border-[#fff] p-[5px] hover:cursor-help md:p-[10px]"
                          >
                            <span className="block h-[10px] w-[10px] md:h-[20px] md:w-[20px]">
                              <RiPagesFill />
                            </span>
                            <span className="absolute left-[15px] top-[0] flex h-[20px] w-[20px] items-center justify-center rounded-[20px] bg-[#fff] md:left-[30px] md:h-[40px] md:w-[40px]">
                              <GoArrowUpRight className="h-[50%] w-[50%] text-[#000]" />
                            </span>
                          </a>
                        </div>
                      </div>
                      <div className="relative max-w-[300px] md:max-w-[600px] xl:max-w-[700px]">
                        <h3 className="max-w-max border-b-[1px] pb-[1px] text-[14px] font-medium lg:text-[23px]">
                          {nameProject}
                        </h3>
                        <ul className="my-[15px] flex w-[100%] flex-wrap items-center gap-[5px] md:my-[20px] lg:max-w-[500px] lg:gap-[15px]">
                          {technologyMarkup}
                        </ul>
                        <div className="relative">
                          <p className="text-[11px] leading-[15px] text-[#d4d4d4] md:text-[13px] xl:text-[18px] xl:leading-[20px]">
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
                              className="absolute right-[35px] top-[-21.5%] my-[4px] w-max rounded-[50px] border-[1px] border-[#fff] p-[5px] md:top-[-50%] md:my-[0] lg:right-[55px] lg:top-[-55%] lg:p-[10px]"
                            >
                              <span className="block h-[15px] w-[15px] text-[#fff] lg:h-[20px] lg:w-[20px]">
                                <TbBrandGithubFilled />
                              </span>
                              <span className="absolute left-[20px] top-[-5px] flex h-[25px] w-[25px] items-center justify-center rounded-[20px] bg-[#fff] text-[20px] lg:left-[33px] lg:h-[40px] lg:w-[40px]">
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
      </section>
    </>
  );
};
