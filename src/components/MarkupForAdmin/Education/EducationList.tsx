import { MdDeleteForever } from 'react-icons/md';
import {
  IEducationInformation,
  removeEducationInformation,
} from '../../../api/education';
import { FC } from 'react';

interface IEducationList {
  handleById: (id: string) => void;
  data: IEducationInformation[] | undefined;
  refetch: () => void;
}

export const EducationList: FC<IEducationList> = ({
  handleById,
  data,
  refetch,
}) => {
  const removeItemInformation = async (id: string) => {
    try {
      await removeEducationInformation(id);
      refetch();
    } catch (error) {
      console.log('error: ', error);
    }
  };

  return (
    <ul className="flex flex-col gap-[10px]">
      {data?.map(({ en, _id }) => (
        <li key={_id} className="flex justify-between">
          <p
            className="cursor-pointer rounded-[10px] bg-[#8855ff] px-[20px] py-[10px] text-[#fff]"
            onClick={() => handleById(_id as string)}
          >{`${en.degree}${en.programme_subject ? `, ${en.programme_subject}` : ''}`}</p>
          <button
            className="h-[40px] w-[40px] text-[red]"
            type="button"
            onClick={() => removeItemInformation(_id as string)}
          >
            <MdDeleteForever />
          </button>
        </li>
      ))}
    </ul>
  );
};
