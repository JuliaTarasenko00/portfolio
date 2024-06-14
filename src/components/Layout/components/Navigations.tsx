import { NavLink } from 'react-router-dom';
import { IOptions } from '../Layout';
import { FC } from 'react';

interface INavigation {
  option: IOptions[];
  selectedTab: string;
  setSelectedTab: (el: string) => void;
}

export const Navigation: FC<INavigation> = ({
  option,
  selectedTab,
  setSelectedTab,
}) => {
  return (
    <nav className="mb-[10%]">
      <ul className="ml-auto flex max-w-max justify-end gap-[10px] rounded-[20px] bg-[#eaa70c] p-[10px]">
        {option.map((item: IOptions) => (
          <li
            key={item.name}
            className={item.name === selectedTab ? 'selected' : ''}
            onClick={() => setSelectedTab(item.name)}
          >
            <NavLink
              to={item.patch}
              style={({ isActive }) => ({
                color: isActive ? '#8c8b89' : '',
                cursor: isActive ? 'context-menu' : '',
              })}
              className="flex flex-col items-center rounded-[10px] bg-[#fff] px-[15px] py-[10px] text-main_color transition-colors duration-350 ease-in-out hover:text-[#f9b058] focus:text-[#f9b058]"
            >
              <span className="block h-[20px] w-[20px]"> {item.image}</span>
              {item.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};
