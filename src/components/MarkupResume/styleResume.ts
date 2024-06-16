const styleTitle =
  'mb-[10px] flex items-center gap-[3px] text-[25px] font-bold text-main_color';
const styleImg = ' w-[25px] h-[25px] text-[#eaa70c]';
const styleList = 'flex flex-col gap-[10px]';
const styleItem =
  'rounded-[15px] w-[300px] px-[10px] py-[15px] flex flex-col gap-[3px]';
const styleYear = ' text-[12px] italic text-center';
const styleName = ' text-[12px] ';
const styleTitleItem = 'font-medium text-[15px]';

const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

export {
  styleList,
  styleItem,
  styleYear,
  styleName,
  styleTitleItem,
  container,
  item,
  styleTitle,
  styleImg,
};
