import React from 'react';

interface Prop {
  className?: string;
  css?: any;
  text?: string;
  htmlFor?: string;
}

const FormLabel = ({ className, css, htmlFor, text }: Prop) => {
  return (
    <label className={className} css={css} htmlFor={htmlFor}>
      {text}
    </label>
  );
};

export default FormLabel;
