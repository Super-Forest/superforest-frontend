import React from 'react';
import tw from 'twin.macro';
import { css } from '@emotion/react';
import Form from 'components/loggedOut/Form';

const container = tw`
  container
  mx-auto
  pt-80
`;

const formWrapper = tw`
  p-24
  mx-auto
  w-11/12
  bg-white
  shadow-lg
  rounded
  md:w-3/7
`;

const title = tw`
  font-bold
  text-center
`;

const img = css`
  display: flex;
  align-items: center;
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background-color: #f9f9f9;
  margin: 0 auto;
`;

const SignInPresentation = () => {
  return (
    <div css={container}>
      <div css={formWrapper}>
        <h1 css={title}>Sign In</h1>
        <div css={img}>
          <img src={'./images/Peppa.png'} />
        </div>
        <Form />
      </div>
    </div>
  );
};

export default SignInPresentation;
