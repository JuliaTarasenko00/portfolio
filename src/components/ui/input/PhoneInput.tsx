import React, { FC, forwardRef } from 'react';
import { IMaskMixin } from 'react-imask';

interface PhoneInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  errorMessage?: string;
}

interface MaskedInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  inputRef?: React.ForwardedRef<HTMLInputElement>;
}

const MaskedInput = IMaskMixin(({ inputRef, ...props }: MaskedInputProps) => (
  <input ref={inputRef} {...props} />
));

export const PhoneInput: FC<PhoneInputProps> = forwardRef(
  ({ errorMessage, ...rest }, _ref: React.ForwardedRef<HTMLInputElement>) => {
    return (
      <div>
        <MaskedInput
          {...rest}
          mask="+38# *00 00 00 00"
          definitions={{
            '#': /[0]/,
            '*': /[6,7,8,9,5]/,
          }}
          radix="."
          inputRef={_ref}
          overwrite
          type="phone"
          className={`block w-[100%] rounded-[5px] p-[5px] ${
            errorMessage
              ? 'border-[red]'
              : !errorMessage && rest.value
                ? 'border-[green]'
                : 'border-[grey]'
          } border-[1px] bg-transparent text-main_color outline-none placeholder:text-[grey]`}
        />
        {errorMessage && (
          <p className="text-[10px] text-[red]">{errorMessage}</p>
        )}
      </div>
    );
  },
);

PhoneInput.displayName = 'PhoneInput';
