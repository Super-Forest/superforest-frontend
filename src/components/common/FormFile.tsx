import React, { ChangeEventHandler, forwardRef } from 'react';

interface Prop {
  id?: string;
  children?: JSX.Element | JSX.Element[];
  className?: string;
  css?: any;
  name?: string;
  accept?: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  disabled?: boolean;
  multiple?: boolean;
}

const FormFile = forwardRef<HTMLInputElement, Prop>(
  ({ accept, className, children, css, disabled, id, name, onChange, multiple }: Prop, ref) => {
    return (
      <>
        {children}
        <input
          accept={accept}
          className={className}
          css={css}
          disabled={disabled}
          id={id}
          multiple={multiple}
          name={name}
          onChange={onChange}
          ref={ref}
          type="file"
        />
      </>
    );
  },
);
FormFile.displayName = 'FormFile';
export default FormFile;
