import React from 'react';
import tw from 'twin.macro';
import { css } from '@emotion/react';
import Form from 'components/loggedOut/Form';

const container = tw`
container
mx-auto
pt-20
`;

const formWrapper = tw`
bg-white
shadow-lg
w-4/12
rounded
mx-auto
p-24
`;

const title = tw`
font-bold
text-center
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
      <div css={formWrapper}>
        <h1 css={title}>Sign In</h1>
        <div css={img}></div>
        <Form />
      </div>
    </div>
  );
};

export default SignInPresentation;
