import { FC } from 'react';
import { RiPagesFill } from 'react-icons/ri';
import { IProject } from '../../types/typeProject';
import { TbBrandGithubFilled } from 'react-icons/tb';
import { GoArrowUpRight } from 'react-icons/go';

interface IMarkupProject {
  items: IProject[] | undefined;
}

export const MarkupProject: FC<IMarkupProject> = ({ items }) => {
  return (
    <ul>
      {items?.map(
        ({
          _id,
          nameProject,
          technologyStack,
          image1,
          image2,
          linkGit,
          livePage,
          description,
        }) => {
          const technologyArray: Array<string> = technologyStack.split(',');
          const technologyMarkup = technologyArray.map((el) => (
            <li
              key={el}
              className="w-max rounded-[25px] border-[1px] border-[#9a9a9a] px-[15px] py-[5px] text-[#ffffff]"
            >
              {el}
            </li>
          ));

          return (
            <li
              key={_id}
              className="mb-[45px] flex items-start justify-center gap-[20px] last:mb-0 odd:flex-row-reverse"
            >
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
                    className="absolute right-[35%] top-[50%] z-20 w-max translate-x-[-30%] translate-y-[-50%] rounded-[50px] border-[1px] border-[#fff] p-[10px]"
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
                <h3 className="text-[23px] font-medium">{nameProject}</h3>
                <ul className="my-[20px] flex w-[100%] max-w-[400px] flex-wrap items-center gap-[15px]">
                  {technologyMarkup}
                </ul>
                <p className="text-[13px] text-[#d4d4d4]">{description}</p>
                <a
                  href={linkGit}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute bottom-[-25px] right-[-25px] w-max rounded-[50px] border-[1px] border-[#fff] p-[10px]"
                >
                  <span className="block h-[20px] w-[20px]">
                    <TbBrandGithubFilled />
                  </span>
                  <span className="absolute left-[30px] top-[0] block max-w-[40px] rounded-[20px] bg-[#fff] p-[10px]">
                    <GoArrowUpRight className="h-[20px] w-[20px] text-[#000]" />
                  </span>
                </a>
              </div>
            </li>
          );
        },
      )}
    </ul>
  );
};