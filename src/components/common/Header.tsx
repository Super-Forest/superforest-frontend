import React, { MouseEventHandler, useState } from 'react';
import { BiMenu } from 'react-icons/bi';
import tw from 'twin.macro';
import Button from './Button';

interface Prop {
  handleOpen: MouseEventHandler<HTMLButtonElement>;
}

const header = tw`
  flex
  items-center
  h-24
  bg-green-100
`;

const hamburgerButton = tw`
  flex
  items-center
  justify-center
  ml-5
  w-14
  h-14
`;

const hamburgerSvg = tw`
  w-12
  h-12
`;

const Header = ({ handleOpen }: Prop) => {
  return (
    <>
      <header css={header}>
        <Button css={hamburgerButton} onClick={handleOpen} type="button">
          <BiMenu css={hamburgerSvg} />
        </Button>
      </header>
    </>
  );
};

export default Header;
