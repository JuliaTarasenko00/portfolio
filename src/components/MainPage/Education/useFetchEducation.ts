import { useQuery } from '@tanstack/react-query';
import { useLanguage } from '../../../helpers/context/languageContext/useLanguage';
import { IEducation } from '../../../types/typeResume';
import { getEducation } from '../../../api/education';

export const useFetchEducation = () => {
  const { currentLanguage: language } = useLanguage();

  const { data } = useQuery<IEducation[]>({
    queryKey: ['fetch/education', language],
    queryFn: () => getEducation(language),
  });

  return { data };
};
