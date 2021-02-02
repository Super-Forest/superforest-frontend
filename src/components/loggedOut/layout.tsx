import React from 'react';
import { css } from '@emotion/react';

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
      <main css={main}>{children}</main>
    </div>
  );
};

export default Layout;
