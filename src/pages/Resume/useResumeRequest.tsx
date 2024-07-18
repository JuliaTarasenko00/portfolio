import { useQuery } from '@tanstack/react-query';
import { getEducation } from '../../api/education';
import { IEducation, IExperience } from '../../types/typeResume';
import { useLanguage } from '../../helpers/context/languageContext/useLanguage';
import { getExperience } from '../../api/experience';

export const useResumeRequest = () => {
  const { currentLanguage: language } = useLanguage();

  const { data: educationList, isPending: isPendingEducation } = useQuery<
    IEducation[],
    Error
  >({
    queryKey: ['education', language],
    queryFn: () => getEducation(language),
  });

  const { data: experienceList, isPending: isPendingExperience } = useQuery<
    IExperience[],
    Error
  >({
    queryKey: ['experience', language],
    queryFn: () => getExperience(language),
  });

  return {
    educationList,
    isPendingEducation,
    experienceList,
    isPendingExperience,
  };
};
