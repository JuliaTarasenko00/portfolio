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
    <nav>
      <ul className="flex justify-end gap-[10px]">
        {option.map((item: IOptions) => (
          <li
            key={item.name}
            className={item.name === selectedTab ? 'selected' : ''}
            onClick={() => setSelectedTab(item.name)}
          >
            <NavLink to={item.patch}>{item.name}</NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};
