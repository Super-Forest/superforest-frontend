import React from 'react';
import { css } from '@emotion/react';

interface Prop {
  children: JSX.Element | JSX.Element[];
  message: string;
  direction?: string;
}

const container = css`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  width: fit-content;
  height: fit-content;
  &:hover > .tooltip,
  &:active > .tooltip {
    display: block;
    animation: tooltipOpacity 1s;
  }

  @keyframes tooltipOpacity {
    0% {
      opacity: 0;
    }
    40% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;

const content = css`
  display: none;
  padding: 0 5px;
  position: absolute;
  z-index: 200;
  font-size: 1.2rem;
  border-radius: 10px;
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  white-space: pre;
  transform: translate(0px, 30px);
`;

const Tooltip = ({ children, message }: Prop) => {
  return (
    <div css={container}>
      {children}
      <div className="tooltip" css={content}>
        {message}
      </div>
    </div>
  );
};

export default Tooltip;
