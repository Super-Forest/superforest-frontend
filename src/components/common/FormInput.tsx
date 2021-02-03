import React, { ChangeEvent, ChangeEventHandler } from 'react';

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

const FormInput = ({
  className,
  css,
  disabled,
  name,
  onChange,
  placeholder,
  type,
  value,
}: Prop) => {
  return (
    <input
      className={className}
      css={css}
      disabled={disabled}
      name={name}
      onChange={onChange}
      placeholder={placeholder}
      type={type}
      value={value}
    />
  );
};

export default FormInput;
