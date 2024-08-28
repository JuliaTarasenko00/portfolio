import { useNavigate } from 'react-router-dom';
import { IoMdArrowBack } from 'react-icons/io';
import { useQuery } from '@tanstack/react-query';
import { MarkupProject } from '../../components/MarkupProject/MarkupProject';
import { getProjectsByLanguage } from '../../api/projects';
import { IProject } from '../../types/typeProject';
import Loader from '../../components/ui/loader/Loader';
import { useLanguage } from '../../helpers/context/languageContext/useLanguage';
import { useTranslation } from 'react-i18next';
import { token } from '../../i18n/token';
import { routers } from '../../helpers/routes';

export default function Projects() {
  const { currentLanguage: language } = useLanguage();
  const { t } = useTranslation();
  const navigation = useNavigate();

  const { data, isLoading } = useQuery<IProject[]>({
    queryKey: ['projectsByLanguage', language],
    queryFn: () => getProjectsByLanguage(language),
  });

  return (
    <>
      {isLoading && <Loader />}
      {!isLoading && (
        <section className="pb-[55px] pt-[20px]">
          <div className="container relative">
            <h2 className="mb-[50px] text-center text-[25px] font-bold text-[#fff]">
              .../{t(token.title.projects)}...
            </h2>
            <button
              type="button"
              onClick={() => navigation(routers.home)}
              className="absolute left-0 top-0 h-[30px] w-[30px] rounded-[20px] border-[1px] border-[#fff] p-[5px] text-[#fff]"
            >
              <IoMdArrowBack />
            </button>
            <>
              <MarkupProject items={data} />
            </>
          </div>
        </section>
      )}
    </>
  );
}
