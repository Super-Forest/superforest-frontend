import React, { ChangeEvent, ChangeEventHandler, forwardRef } from 'react';

interface Prop {
  className?: string;
  css?: any;
  type?: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  value?: string;
  disabled?: boolean;
  placeholder?: string;
  name?: string;
}

const FormInput = forwardRef<HTMLInputElement, Prop>(
  ({ className, css, disabled, name, onChange, placeholder, type, value }: Prop, ref) => {
    return (
      <input
        className={className}
        css={css}
        disabled={disabled}
        name={name}
        onChange={onChange}
        placeholder={placeholder}
        ref={ref}
        type={type}
        value={value}
      />
    );
  },
);

FormInput.displayName = 'FormInput';

export default FormInput;
