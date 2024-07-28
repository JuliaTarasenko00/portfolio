import { useQuery } from '@tanstack/react-query';
import { IContactInformation } from '../types/typeContactInformation';
import { getContactInformation } from '../api/contact_information';
import { useLanguage } from './context/languageContext/useLanguage';

export const useFetchMainInformation = () => {
  const { currentLanguage: language } = useLanguage();
  const { data, isLoading } = useQuery<IContactInformation>({
    queryKey: ['contactInformation', language],
    queryFn: () => getContactInformation(language),
  });

  return { data, isLoading };
};
