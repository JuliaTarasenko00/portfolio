import { useQuery } from '@tanstack/react-query';
import { IExperience } from '../../types/typeResume';
import { useLanguage } from '../../helpers/context/languageContext/useLanguage';
import { getExperience } from '../../api/experience';

export const useFetchExperience = () => {
  const { currentLanguage: language } = useLanguage();

  const { data } = useQuery<IExperience[]>({
    queryKey: ['fetch/experience', language],
    queryFn: () => getExperience(language),
  });

  return { data };
};
