import React, { MouseEventHandler } from 'react';

interface Prop extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  id?: string;
  children?: JSX.Element | JSX.Element[];
  className?: string;
  css?: any;
  text?: string;
  label?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  type: 'button' | 'submit' | 'reset';
  disabled?: boolean;
}

const Button = ({ className, children, css, disabled, id, onClick, type, text, label }: Prop) => {
  return (
    <button
      className={className}
      css={css}
      disabled={disabled}
      id={id}
      onClick={onClick}
      type={type}
    >
      {children ? children : text}
    </button>
  );
};

export default Button;
