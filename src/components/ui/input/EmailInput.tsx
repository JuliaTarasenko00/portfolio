import { FC, forwardRef } from 'react';

interface IEmailInput extends React.InputHTMLAttributes<HTMLInputElement> {
  errorMessage?: string;
}

export const EmailInput: FC<IEmailInput> = forwardRef(
  ({ errorMessage, ...rest }, _ref: React.ForwardedRef<HTMLInputElement>) => {
    return (
      <>
        <input
          {...rest}
          ref={_ref}
          type="email"
          className={`block w-[100%] rounded-[5px] p-[5px] ${errorMessage ? 'border-[red]' : !errorMessage && rest.value ? 'border-[green]' : 'border-[grey]'} border-[1px] bg-transparent text-main_color outline-none placeholder:text-[grey]`}
        />
        {errorMessage && (
          <p className="text-[10px] text-[red]">{errorMessage}</p>
        )}
      </>
    );
  },
);

EmailInput.displayName = 'EmailInput';
