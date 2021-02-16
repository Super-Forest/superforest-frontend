import React from 'react';
import { css } from '@emotion/react';
import tw from 'twin.macro';

interface Prop {
  isOpen: boolean;
}

const navigationContent = tw`
    absolute
    inset-y-0
    p-0
    w-9/12
    md:w-5/12
    -left-full
    bg-white
    overflow-visible
    transition-all
    duration-300
    outline-none
`;

const navigationOpen = css`
  left: 0;
`;

const Navigation = ({ isOpen }: Prop) => {
  return (
    <div css={[navigationContent, isOpen && navigationOpen]} role="navigation" tabIndex={-1}></div>
  );
};

export default Navigation;
