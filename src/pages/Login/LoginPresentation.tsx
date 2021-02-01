import React from 'react';
import Form from 'components/common/Form';

import tw from 'twin.macro';
import { css } from '@emotion/react';

const container = tw`
container
mx-auto

`;

const formwrapper = tw`
bg-white
shadow-lg
w-5/12
rounded
mx-auto
p-24
`;

const title = tw`
text-5xl
font-bold
text-left
`;

const img = css`
  width: 350px;
  height: 350px;
  border-radius: 50%;
  background-color: #f9f9f9;
  background-image: url('./images/Peppa.png');
  background-position: center -20px;
  margin: 0 auto;
`;

const LoginPresentation = () => {
  return (
    <div css={container}>
      <div css={formwrapper}>
        <div css={img}></div>
        <p css={title}>Sing In</p>
        <Form />
      </div>
    </div>
  );
};

export default LoginPresentation;
