import { useQuery } from '@tanstack/react-query';
import { MarkupProject } from '../../components/MarkupProject/MarkupProject';
import { useLanguage } from '../../helpers/context/languageContext/useLanguage';
import { getProjectsByLanguage } from '../../api/projects';
import { IProject } from '../../types/typeProject';
import Loader from '../../components/ui/loader/Loader';

export default function Projects() {
  const { currentLanguage: language } = useLanguage();

  const { data, isLoading } = useQuery<IProject[]>({
    queryKey: ['projectsByLanguage', language],
    queryFn: () => getProjectsByLanguage(language),
  });

  return (
    <>
      {isLoading && <Loader />}
      {!isLoading && (
        <section>
          <div className="container">
            <h2 className="mb-[50px] text-center text-[25px] font-bold text-[#fff]">
              .../Projects...
            </h2>
            <>
              <MarkupProject items={data} />
            </>
          </div>
        </section>
      )}
    </>
  );
}
