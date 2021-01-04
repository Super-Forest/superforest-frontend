import React from 'react';
import { css } from '@emotion/react';
import Header from './Header';
import Footer from './Footer';

const container = css`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;
const main = css`
  flex: 1;
`;

const Layout: React.FC = ({ children }) => {
  return (
    <div css={container}>
      <Header />
      <main css={main}>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
