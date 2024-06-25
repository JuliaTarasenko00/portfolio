import { ChangeEvent, FC, forwardRef } from 'react';

interface ImageInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  errorMessage?: string;
  setSelectImg: (el: File | null) => void;
}

export const ImageInput: FC<ImageInputProps> = forwardRef(
  (
    { errorMessage, setSelectImg, ...rest },
    _ref: React.ForwardedRef<HTMLInputElement>,
  ) => {
    return (
      <div>
        <input
          {...rest}
          ref={_ref}
          type="file"
          accept="image/png, image/jpeg"
          onChange={(ev: ChangeEvent<HTMLInputElement>) => {
            if (ev.target.files) setSelectImg(ev.target.files[0]);
            if (rest.onChange) rest.onChange(ev);
          }}
          multiple
          className={`block w-[100%] rounded-[5px] p-[5px] ${errorMessage ? 'border-[red]' : !errorMessage && rest.value ? 'border-[green]' : 'border-[grey]'} border-[1px] bg-transparent text-main_color outline-none placeholder:text-[grey]`}
        />
        {errorMessage && (
          <p className="text-[10px] text-[red]">{errorMessage}</p>
        )}
      </div>
    );
  },
);

ImageInput.displayName = 'ImageInput';
