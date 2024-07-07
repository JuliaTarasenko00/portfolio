import { Bounce, ToastContainerProps } from 'react-toastify';

export const styleForToastity: ToastContainerProps = {
  position: 'bottom-right',
  autoClose: 5000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  theme: 'light',
  transition: Bounce,
};
