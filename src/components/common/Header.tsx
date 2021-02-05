import React from 'react';
import tw from 'twin.macro';

const headerStyle = tw`
  h-24
  bg-green-100
`;

const Header: React.FC = () => {
  return <header css={headerStyle}></header>;
};

export default Header;
