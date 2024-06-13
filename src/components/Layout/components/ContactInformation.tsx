import { FaMapLocationDot, FaSquarePhone } from 'react-icons/fa6';
import contactInformation from '../../../example/contact_information.json';
import { IContactInformation } from '../../../types/contactInformation';
import { MdEmail } from 'react-icons/md';
import { FaGitSquare, FaLinkedin } from 'react-icons/fa';

const data: IContactInformation = contactInformation;

const contact =
  'text-main_color text-center hover:text-[#eaa70c] focus:text-[#eaa70c] transition-colors duration-350 ease-in-out text-[17px] leading-8 ';
const item = 'flex items-center gap-[2px] ';
const icon = 'text-main_color h-[30px] w-[30px]';

export const ContactInformation = () => {
  return (
    <aside className="col-[1]">
      <div className="relative top-[40px] flex min-h-[500px] min-w-[500px] flex-col items-center rounded-[10px] bg-[#fff] px-[40px] pb-[40px] pt-[115px]">
        <div className="absolute top-[-20%] h-[200px] w-[200px] overflow-hidden rounded-[25px]">
          <img
            src={data.avatar}
            alt={data.name}
            width={200}
            height={200}
            className="h-full w-full object-cover object-[0_25%]"
          />
        </div>
        <div className="text-center">
          <h2 className="text-main_color text-[26px] font-bold uppercase leading-8">
            {data.name}
          </h2>
          <p className="mx-auto mt-[8px] w-max rounded-[10px] bg-[#808080a2] px-[8px] py-[4px] text-[16px] font-bold leading-8 text-[#fff]">
            {data.position}
          </p>
          <ul className="mt-[20px] flex flex-col gap-[10px]">
            <li className={item}>
              <span>
                <FaSquarePhone className={icon} />
              </span>
              <a className={contact} href={`tel:${data.phoneNumber}`}>
                {data.phoneNumber}
              </a>
            </li>
            <li className={item}>
              <span>
                <MdEmail className={icon} />
              </span>
              <a href={`mailto:${data.email}`} className={contact}>
                {data.email}
              </a>
            </li>
            <li className={item}>
              <span>
                <FaLinkedin className={icon} />
              </span>
              <a href={data.linkedin} target="_blank" className={contact}>
                LinkedIn
              </a>
            </li>
            <li className={item}>
              <span>
                <FaGitSquare className={icon} />
              </span>
              <a href={data.git} target="_blank" className={contact}>
                GitHub
              </a>
            </li>
            <li className={item}>
              <span>
                <FaMapLocationDot className={icon} />
              </span>
              <p className={contact}>{data.location}</p>
            </li>
          </ul>
          <button
            type="button"
            className="duration-350 mx-auto mt-[15px] block max-w-[200px] rounded-[20px] bg-[#eaa70c] p-[15px] text-[16px] font-bold uppercase leading-8 text-[#fff] outline-none transition-colors ease-in-out hover:bg-[#f9b058] focus:bg-[#f9b058]"
          >
            Download CV
          </button>
        </div>
      </div>
    </aside>
  );
};
