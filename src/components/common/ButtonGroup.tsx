import { jsx } from '@emotion/react';
import React from 'react';

interface Prop {
  children?: JSX.Element | JSX.Element[];
  className?: string;
  css?: any;
}

const ButtonGroup = ({ className, css, children }: Prop) => {
  return (
    <div className={className} css={css}>
      {children}
    </div>
  );
};

export default ButtonGroup;
