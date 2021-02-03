import React, { MouseEventHandler } from 'react';

interface Prop {
  children?: JSX.Element | JSX.Element[];
  className?: string;
  css?: any;
  text?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  type: 'button' | 'submit' | 'reset';
  disabled?: boolean;
}

const Button = ({ className, children, css, disabled, onClick, type, text }: Prop) => {
  return (
    <button className={className} css={css} disabled={disabled} onClick={onClick} type={type}>
      {children ? children : text}
    </button>
  );
};

export default Button;
