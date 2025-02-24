import { useLanguage } from '../../helpers/context/languageContext/useLanguage';
import { useMainInformation } from '../../helpers/context/mainInformarion/useMainInformation';
import { CustomOutlet } from '../../helpers/CustomOutlet/CustomOutlet';
import { Footer } from '../Footer/Footer';
import Loader from '../ui/loader/Loader';

export default function Layout() {
  const { currentLanguage, language, setCurrentLanguage } = useLanguage();
  const { data, isLoading } = useMainInformation();

  return (
    <>
      {isLoading && <Loader />}
      {!isLoading && (
        <>
          <header className="container flex justify-between py-[25px]">
            <h2 className="text-[15px] text-[#fff] underline lg:text-[25px]">
              {data?.name}
            </h2>
            <ul>
              {language.map((el: string) => (
                <li
                  onClick={() => setCurrentLanguage(el)}
                  key={el}
                  className={`${el === currentLanguage ? 'cursor-no-drop italic text-[grey]' : 'cursor-pointer text-[#fff]'} text-[12px] capitalize lg:text-[18px]`}
                >
                  {el === currentLanguage ? (
                    <>
                      {'//'} {el}
                    </>
                  ) : (
                    <>{el}</>
                  )}
                </li>
              ))}
            </ul>
          </header>
          <main>
            <CustomOutlet />
          </main>
          <footer>
            <Footer />
          </footer>
        </>
      )}
    </>
  );
}
