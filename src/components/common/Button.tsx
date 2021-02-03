import React, { MouseEventHandler } from 'react';

interface Prop {
  className?: string;
  css?: any;
  text?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  type: 'button' | 'submit' | 'reset';
  disabled?: boolean;
}

const Button = ({ className, css, disabled, onClick, type, text }: Prop) => {
  return (
    <button className={className} css={css} disabled={disabled} onClick={onClick} type={type}>
      {text}
    </button>
  );
};

export default Button;
