import { FC } from 'react';
import { MdDeleteForever } from 'react-icons/md';
import {
  deleteExperienceInformation,
  IExperienceInformation,
} from '../../../api/experience';

interface IExperienceList {
  handleById: (id: string) => void;
  data: IExperienceInformation[] | undefined;
  refetch: () => void;
}

export const ExperienceList: FC<IExperienceList> = ({
  handleById,
  data,
  refetch,
}) => {
  const removeItemInformation = async (id: string) => {
    try {
      await deleteExperienceInformation(id);
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
            className="w-[100%] max-w-[180px] cursor-pointer rounded-[10px] bg-[#8855ff] px-[10px] py-[10px] text-center text-[#fff] sm:max-w-[200px] sm:px-[20px]"
            onClick={() => handleById(_id as string)}
          >
            {en.position}, {en.name_organization}
          </p>
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
