import css from './Loader.module.css';

export default function Loader() {
  return (
    <div className="fixed top-0 z-40 flex h-[100vh] w-[100%] min-w-[100vh] flex-col items-center justify-center overflow-hidden bg-[#000]">
      <span className={css.loader}></span>
      <p className="relative italic text-[#fff]">
        Loading <span className={css.loader_text}></span>
      </p>
    </div>
  );
}
