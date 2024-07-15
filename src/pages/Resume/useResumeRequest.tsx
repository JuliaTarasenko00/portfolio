import { useQuery } from '@tanstack/react-query';
import { getEducation } from '../../api/education';
import { IEducation } from '../../types/typeResume';
import { useLanguage } from '../../helpers/context/languageContext/useLanguage';

export const useResumeRequest = () => {
  const { currentLanguage: language } = useLanguage();

  const { data: educationList, isPending: isPendingEducation } = useQuery<
    IEducation[],
    Error
  >({
    queryKey: ['education', language],
    queryFn: () => getEducation(language),
  });

  return {
    educationList,
    isPendingEducation,
  };
};
