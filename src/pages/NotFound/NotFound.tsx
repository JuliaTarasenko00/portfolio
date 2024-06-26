import { motion } from 'framer-motion';
import { IoArrowBackCircleOutline } from 'react-icons/io5';
import notFound from '../../assets/image/not_found.webp';
import { Link } from 'react-router-dom';
import { routers } from '../../helpers/routes';

export default function NotFound() {
  return (
    <section className="absolute top-[73%]">
      <motion.img
        src={notFound}
        initial={{ translateY: '100%', scale: 0 }}
        animate={{ translateY: 0, scale: 1 }}
        transition={{
          type: 'just',
          stiffness: 360,
          damping: 40,
        }}
        alt="Page Not Found"
        width={500}
        height={500}
        loading="lazy"
        className="fixed top-0 object-cover"
      />
      <h2 className="text-center text-[24px] italic text-[#fff]">
        Unfortunately, the page are looking for does not exist.
      </h2>
      <Link
        to={routers.home}
        className="mt-[15px] flex cursor-default items-center justify-center gap-[10px] bg-transparent"
      >
        <span>
          <IoArrowBackCircleOutline className="h-[45px] w-[45px] cursor-pointer text-[#e9a718eb] transition-colors duration-350 ease-in-out hover:text-[#e9a718] focus:text-[#e9a718]" />
        </span>
        <span className="cursor-pointer rounded-[30px] bg-[#e9a718eb] px-[20px] py-[10px] text-[20px] text-[#FFF] transition-colors duration-350 ease-in-out hover:bg-[#e9a718] focus:bg-[#e9a718]">
          Back To Home
        </span>
      </Link>
    </section>
  );
}
