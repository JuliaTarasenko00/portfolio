import { useState } from 'react';
import { EducationForm } from './EducationForm/EducationForm';
import { EducationList } from './EducationList';
import { useQuery } from '@tanstack/react-query';
import {
  getAllEducationList,
  getEducationInformationById,
  IEducationInformation,
} from '../../../api/education';
import { LoaderForComponent } from '../../ui/Loader/LoaderForCompenent';

export const Education = () => {
  const [id, setId] = useState<string>('');

  const { data } = useQuery<IEducationInformation>({
    queryKey: ['contact_information_byId', id],
    queryFn: () => getEducationInformationById(id as string),
    enabled: !!id,
  });

  const {
    data: list,
    refetch,
    isFetching,
  } = useQuery<IEducationInformation[]>({
    queryKey: ['all_education_list'],
    queryFn: getAllEducationList,
  });

  return (
    <>
      {isFetching && <LoaderForComponent />}
      {!isFetching && (
        <>
          <EducationForm
            contactId={id}
            refetch={refetch}
            handleById={setId}
            information={data as IEducationInformation}
          />
          <div className="mt-[30px]">
            <EducationList handleById={setId} data={list} refetch={refetch} />
          </div>
        </>
      )}
    </>
  );
};
