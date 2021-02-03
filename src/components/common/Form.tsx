import React, { FormEventHandler, ReactChildren } from 'react';

interface Prop {
  className?: string;
  css?: any;
  children?: JSX.Element | JSX.Element[];
  onSubmit?: FormEventHandler;
  acceptCharset?: string;
  action?: string;
  autocomplete?: string;
  enctype?: string;
  method?: string;
  noValidate?: boolean;
  target?: string;
}

const Form = ({
  acceptCharset,
  action,
  autocomplete,
  enctype,
  method,
  noValidate,
  className,
  css,
  target,
  children,
}: Prop) => {
  return (
    <form
      acceptCharset={acceptCharset}
      action={action}
      autoComplete={autocomplete}
      className={className}
      css={css}
      encType={enctype}
      method={method}
      noValidate={noValidate}
      target={target}
    >
      {children}
    </form>
  );
};

export default Form;
