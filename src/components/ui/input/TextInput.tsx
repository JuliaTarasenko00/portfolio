import { FC, forwardRef } from 'react';

interface TextInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  errorMessage?: string;
}

export const TextInput: FC<TextInputProps> = forwardRef(
  ({ errorMessage, ...rest }, _ref: React.ForwardedRef<HTMLInputElement>) => {
    return (
      <div>
        <input
          {...rest}
          ref={_ref}
          type="text"
          className={`block w-[100%] rounded-[5px] p-[5px] ${errorMessage ? 'border-[red]' : !errorMessage && rest.value ? 'border-[green]' : 'border-[grey]'} border-[1px] bg-transparent text-main_color outline-none placeholder:text-[grey]`}
        />
        {errorMessage && (
          <p className="text-[10px] text-[red]">{errorMessage}</p>
        )}
      </div>
    );
  },
);

TextInput.displayName = 'TextInput';
