import { FC, forwardRef, useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa6';

interface IPasswordInput extends React.InputHTMLAttributes<HTMLInputElement> {
  errorMessage?: string;
}

export const PasswordInput: FC<IPasswordInput> = forwardRef(
  ({ errorMessage, ...rest }, _ref: React.ForwardedRef<HTMLInputElement>) => {
    const [visiblePassword, setVisiblePassword] = useState<boolean>(false);

    return (
      <>
        <div className="relative">
          <input
            {...rest}
            ref={_ref}
            type={visiblePassword ? 'text' : 'password'}
            className={`block w-[100%] rounded-[5px] p-[5px] ${errorMessage ? 'border-[red]' : !errorMessage && rest.value ? 'border-[green]' : 'border-[grey]'} border-[1px] bg-transparent text-main_color outline-none placeholder:text-[grey]`}
          />
          <button
            type="button"
            onClick={() => setVisiblePassword(!visiblePassword)}
            className="absolute right-[10px] top-[50%] block translate-y-[-50%] text-[#000]"
          >
            {visiblePassword ? <FaEyeSlash /> : <FaEye />}
          </button>
        </div>
        {errorMessage && (
          <p className="text-[10px] text-[red]">{errorMessage}</p>
        )}
      </>
    );
  },
);

PasswordInput.displayName = 'PasswordInput';
