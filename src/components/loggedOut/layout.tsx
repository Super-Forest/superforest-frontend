import React from 'react';
import { css } from '@emotion/react';
import tw from 'twin.macro';

const fullWidth = css`
  background-color: #f6f5f5;
  min-height: 100vh;
`;

const container = tw`
  container
  mx-auto`;

const main = css`
  flex: 1;
`;

const Layout: React.FC = ({ children }) => {
  return (
    <div css={fullWidth}>
      <div css={container}>
        <main css={main}>{children}</main>
      </div>
    </div>
  );
};

export default Layout;
