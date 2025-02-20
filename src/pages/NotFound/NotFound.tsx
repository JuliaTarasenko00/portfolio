import { Link } from 'react-router-dom';
import { routers } from '../../helpers/routes';

export default function NotFound() {
  return (
    <section className=" ">
      <div className="container flex h-screen items-center justify-center text-[#f5f5f5]">
        <div className="relative max-w-md text-center">
          <div className="absolute inset-0 left-[50%] top-[25%] z-[-1] flex translate-x-[-50%] translate-y-[-50%] animate-pulse items-center justify-center text-[10rem] font-bold text-white/5">
            404
          </div>
          <h1 className="animate-pulse text-[6rem] font-bold text-[#a6a6a6]">
            404
          </h1>
          <p className="text-lg text-[#777777]">
            На жаль, сторінка, яку ви шукаєте, не знайдена.
          </p>
          <Link
            to={routers.home}
            className="mt-6 inline-block transform rounded-[15px] bg-[#3d3d3d] px-6 py-3 text-lg text-[#f5f5f5] transition-all duration-300 hover:scale-105 hover:bg-[#3f3f3f]"
          >
            Повернутися на головну
          </Link>
        </div>
      </div>
    </section>
  );
}
