import { useQuery } from '@tanstack/react-query';
import { useLanguage } from '../../helpers/context/useLanguage';
import { getEducation } from '../../api/education';

export const useResumeRequest = () => {
  const { currentLanguage: language } = useLanguage();

  const { data: educationList, isPending: isPendingEducation } = useQuery({
    queryKey: ['education', language],
    queryFn: () => getEducation(language),
  });

  return {
    educationList,
    isPendingEducation,
  };
};
