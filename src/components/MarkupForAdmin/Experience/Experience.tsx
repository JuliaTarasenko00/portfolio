import { useQuery } from '@tanstack/react-query';
import { ExperienceForm } from './educationForm/ExperienceForm';
import { ExperienceList } from './ExperienceList';
import {
  allExperienceInformation,
  getExperienceById,
  IExperienceInformation,
} from '../../../api/experience';
import { useState } from 'react';
import { LoaderForComponent } from '../../ui/Loader/LoaderForCompenent';

export const Experience = () => {
  const [id, setId] = useState<string>('');

  const { data } = useQuery<IExperienceInformation>({
    queryKey: ['experience_byId', id],
    queryFn: () => getExperienceById(id),
    enabled: !!id,
  });

  const {
    data: list,
    refetch,
    isFetching,
  } = useQuery<IExperienceInformation[]>({
    queryKey: ['all_experience_list'],
    queryFn: allExperienceInformation,
  });

  return (
    <>
      {isFetching && <LoaderForComponent />}
      {!isFetching && (
        <>
          <ExperienceForm
            information={data as IExperienceInformation}
            id={id}
            handleById={setId}
            refetch={refetch}
          />
          <div className="mt-[40px]">
            <ExperienceList handleById={setId} data={list} refetch={refetch} />
          </div>
        </>
      )}
    </>
  );
};
