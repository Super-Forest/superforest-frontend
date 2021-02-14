import React, { MouseEvent, useState } from 'react';
import { css } from '@emotion/react';
import Header from '../common/Header';
import ModalOverlay from 'components/common/ModalOverlay';
import Navigation from './Navigation';

const container = css`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;
const main = css`
  flex: 1;
  background-color: #f6f5f5;
`;

const Layout: React.FC = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleOpen = (e: MouseEvent) => {
    const target = e.target as HTMLElement;
    if (target.getAttribute('role') !== 'navigation') {
      setIsOpen((cur) => !cur);
    }
  };
  return (
    <>
      <div css={container}>
        <Header handleOpen={handleOpen} />
        <main css={main}>{children}</main>
      </div>
      <ModalOverlay handleOpen={handleOpen} isOpen={isOpen}>
        <Navigation isOpen={isOpen} />
      </ModalOverlay>
    </>
  );
};

export default Layout;
