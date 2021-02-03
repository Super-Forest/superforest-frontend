import React from 'react';

interface Prop {
  className?: string;
  css?: any;
  defaultValue?: string;
  value?: string;
  name?: string;
  onChange?: React.ChangeEventHandler<HTMLTextAreaElement>;
  onInput?: React.FormEventHandler<HTMLTextAreaElement>;
  placeholder?: string;
  readonly?: boolean;
  disabled?: boolean;
  maxlength?: number;
  required?: boolean;
}

const FormTextArea = ({
  className,
  css,
  defaultValue,
  name,
  maxlength,
  value,
  onChange,
  onInput,
  placeholder,
}: Prop) => {
  return (
    <textarea
      className={className}
      css={css}
      defaultValue={defaultValue}
      maxLength={maxlength}
      name={name}
      onChange={onChange}
      onInput={onInput}
      placeholder={placeholder}
      value={value}
    />
  );
};

export default FormTextArea;
