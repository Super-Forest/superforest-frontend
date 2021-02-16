import React, { MouseEventHandler } from 'react';
import tw from 'twin.macro';

interface Prop {
  children?: JSX.Element | JSX.Element[];
  isOpen: boolean;
  handleOpen?: MouseEventHandler<HTMLDivElement>;
}

const overlay = tw`
  fixed
  bg-gray-800
  bg-opacity-50	
  inset-0
  z-50
  transition
  duration-300
`;

const ModalOverlay = ({ children, handleOpen, isOpen }: Prop) => {
  return (
    <div css={[isOpen && overlay]} onClick={handleOpen}>
      {children}
    </div>
  );
};

export default ModalOverlay;
