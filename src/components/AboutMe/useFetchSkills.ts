import { useQuery } from '@tanstack/react-query';
import { IWorkSkills } from '../../types/typeResume';
import { getFrontSkills, getStyleSkills } from '../../api/work_skills';

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
