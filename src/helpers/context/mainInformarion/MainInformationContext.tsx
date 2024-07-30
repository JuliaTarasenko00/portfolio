import { createContext } from 'react';
import { IContactInformation } from '../../../types/typeContactInformation';
import { useLanguage } from '../languageContext/useLanguage';
import { useQuery } from '@tanstack/react-query';
import { getContactInformation } from '../../../api/contact_information';

export type MainInformation = {
  data: IContactInformation | undefined;
  isLoading: boolean;
};

export const MainContext = createContext<MainInformation | undefined>(
  undefined,
);

export const MainInformationProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const { currentLanguage: language } = useLanguage();
  const { data, isLoading } = useQuery<IContactInformation>({
    queryKey: ['contactInformation', language],
    queryFn: () => getContactInformation(language),
  });

  return (
    <MainContext.Provider value={{ data, isLoading }}>
      {children}
    </MainContext.Provider>
  );
};
