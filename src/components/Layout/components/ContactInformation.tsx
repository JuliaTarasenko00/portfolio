import { useQuery } from '@tanstack/react-query';
import { getContactInformation } from '../../../api/contact_information';
import { FaFilePdf, FaMapLocationDot, FaSquarePhone } from 'react-icons/fa6';
import { IContactInformation } from '../../../types/typeContactInformation';
import { MdEmail } from 'react-icons/md';
import { FaGitSquare, FaLinkedin } from 'react-icons/fa';
import { LoadingComponent } from '../../ui/LoadingComponent';
import { useLanguage } from '../../../helpers/context/languageContext/useLanguage';

const contact =
  'text-main_color text-center hover:text-[#eaa70c] focus:text-[#eaa70c] transition-colors duration-350 ease-in-out text-[17px] leading-8 ';
const item = 'flex items-center gap-[2px] ';
const icon = 'text-main_color h-[30px] w-[30px]';

export const ContactInformation = () => {
  const { currentLanguage: language } = useLanguage();

  const { data, isPending } = useQuery<IContactInformation>({
    queryKey: ['contactInformation', language],
    queryFn: () => getContactInformation(language),
  });

  return (
    <div className="sticky top-[20%] flex min-w-[450px] flex-col items-center rounded-[10px] bg-[#fff] px-[40px] pb-[40px] pt-[115px]">
      <div
        className={`${!isPending && 'bg-contact'} absolute top-[-20%] h-[200px] w-[200px] overflow-hidden rounded-[25px] bg-cover bg-center`}
      >
        {isPending ? (
          <LoadingComponent style="h-full w-full" />
        ) : (
          <img
            src={data?.avatar}
            alt={data?.name}
            width={200}
            height={200}
            className="h-full w-full object-cover object-[0_25%]"
          />
        )}
      </div>
      <div className="text-center">
        <h2 className="text-[26px] font-bold leading-8 text-main_color">
          {isPending ? <LoadingComponent /> : data?.name}
        </h2>
        <p
          className={`mx-auto mt-[8px] w-max rounded-[10px] ${!isPending && 'bg-[#808080a2]'} px-[8px] py-[4px] text-[16px] font-bold italic leading-8 text-[#fff]`}
        >
          {isPending ? <LoadingComponent /> : data?.position}
        </p>
        <ul className="mt-[20px] flex flex-col gap-[10px]">
          <li className={item}>
            <span>
              <FaSquarePhone className={icon} />
            </span>
            {isPending ? (
              <LoadingComponent style={contact} />
            ) : (
              <a className={contact} href={`tel:${data?.phoneNumber}`}>
                {data?.phoneNumber}
              </a>
            )}
          </li>
          <li className={item}>
            <span>
              <MdEmail className={icon} />
            </span>
            {isPending ? (
              <LoadingComponent style={contact} />
            ) : (
              <a href={`mailto:${data?.email}`} className={contact}>
                {data?.email}
              </a>
            )}
          </li>
          <li className={item}>
            <span>
              <FaLinkedin className={icon} />
            </span>
            {isPending ? (
              <LoadingComponent style={contact} />
            ) : (
              <a href={data?.linkedin} target="_blank" className={contact}>
                LinkedIn
              </a>
            )}
          </li>
          <li className={item}>
            <span>
              <FaGitSquare className={icon} />
            </span>
            {isPending ? (
              <LoadingComponent style={contact} />
            ) : (
              <a href={data?.git} target="_blank" className={contact}>
                GitHub
              </a>
            )}
          </li>
          <li className={item}>
            <span>
              <FaMapLocationDot className={icon} />
            </span>
            {isPending ? (
              <LoadingComponent style={contact} />
            ) : (
              <p className={contact}>{data?.location}</p>
            )}
          </li>
        </ul>
        {isPending ? (
          <LoadingComponent style="mx-auto mt-[15px]  max-w-[200px] rounded-[20px]  p-[15px]" />
        ) : (
          <a
            href={data?.cv}
            download
            target="_blank"
            className="mx-auto mt-[15px] flex max-w-[200px] items-center gap-[5px] rounded-[20px] bg-[#eaa70c] p-[15px] text-[16px] font-bold uppercase leading-8 text-[#fff] outline-none transition-colors duration-350 ease-in-out hover:bg-[#f9b058] focus:bg-[#f9b058]"
          >
            <FaFilePdf className="h-[20px] w-[20px]" /> Download CV
          </a>
        )}
      </div>
    </div>
  );
};
