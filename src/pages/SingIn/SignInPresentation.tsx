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
w-4/12
rounded
mx-auto
p-24
`;

const title = tw`
font-bold
text-left
`;

const img = css`
  width: 250px;
  height: 250px;
  border-radius: 50%;
  background-color: #f9f9f9;
  background-image: url('./images/Peppa.png');
  background-size: 300px auto;
  background-position: -30px;
  margin: 0 auto;
`;

const SignInPresentation = () => {
  return (
    <div css={container}>
      <div css={formwrapper}>
        <h1 css={title}>Sing In</h1>
        <div css={img}></div>
        <Form />
      </div>
    </div>
  );
};

export default SignInPresentation;
