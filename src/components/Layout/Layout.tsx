import { useLanguage } from '../../helpers/context/languageContext/useLanguage';
import { CustomOutlet } from '../../helpers/CustomOutlet/CustomOutlet';
import { useFetchMainInformation } from '../../helpers/useFetchMainInformation';
import Loader from '../ui/loader/Loader';

export default function Layout() {
  const { currentLanguage, language, setCurrentLanguage } = useLanguage();
  const { data, isLoading } = useFetchMainInformation();

  return (
    <>
      {isLoading && <Loader />}
      {!isLoading && (
        <>
          <header className="container relative flex justify-between py-[25px]">
            <div className="circle left-[-100px] top-[-150px] h-[500px] w-[500px]"></div>
            <div className="circle right-[-80px] top-[-50px] h-[200px] w-[200px]"></div>
            <h2 className="text-[25px] text-[#fff] underline">{data?.name}</h2>
            <ul>
              {language.map((el: string) => (
                <li
                  onClick={() => setCurrentLanguage(el)}
                  key={el}
                  className={`${el === currentLanguage ? 'cursor-no-drop text-[grey] line-through' : 'cursor-pointer text-[#fff]'} text-[18px] capitalize`}
                >
                  {el}
                </li>
              ))}
            </ul>
          </header>
          <main>
            <CustomOutlet />
          </main>
        </>
      )}
    </>
  );
}
