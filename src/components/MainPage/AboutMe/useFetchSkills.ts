import { useQuery } from '@tanstack/react-query';
import { getFrontSkills, getStyleSkills } from '../../../api/work_skills';
import { IWorkSkills } from '../../../types/typeResume';

export const useFetchSkills = () => {
  const { data: front } = useQuery<IWorkSkills[]>({
    queryKey: ['skills/front'],
    queryFn: getFrontSkills,
  });

  const { data: style } = useQuery<IWorkSkills[]>({
    queryKey: ['skills/style'],
    queryFn: getStyleSkills,
  });

  return {
    front,
    style,
  };
};
