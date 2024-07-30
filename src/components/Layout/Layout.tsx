import { useLanguage } from '../../helpers/context/languageContext/useLanguage';
import { useMainInformation } from '../../helpers/context/mainInformarion/useMainInformation';
import { CustomOutlet } from '../../helpers/CustomOutlet/CustomOutlet';
import Loader from '../ui/loader/Loader';

export default function Layout() {
  const { currentLanguage, language, setCurrentLanguage } = useLanguage();
  const { data, isLoading } = useMainInformation();

  return (
    <>
      {isLoading && <Loader />}
      {!isLoading && (
        <>
          <header className="container relative flex justify-between py-[25px]">
            <div className="circle left-[-140px] top-[-150px] h-[500px] w-[500px]"></div>
            <div className="circle right-[-100px] top-[-80px] h-[200px] w-[200px]"></div>
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
