import React from 'react';
import { css } from '@emotion/react';
import Header from '../common/Header';
import Footer from '../common/Footer';

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
  return (
    <div css={container}>
      <Header />
      <main css={main}>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
