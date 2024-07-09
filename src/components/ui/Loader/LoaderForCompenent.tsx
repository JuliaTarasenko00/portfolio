import css from './Loader.module.css';

export const LoaderForComponent = () => {
  return (
    <div className="flex h-[300px] w-full items-center">
      <span className={css.loader_component}></span>
    </div>
  );
};
