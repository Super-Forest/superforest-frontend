import React, { FormEvent } from 'react';
import tw from 'twin.macro';
import { css } from '@emotion/react';

const formWrapper = tw`
  p-24
  mx-auto
  w-11/12
  bg-white
  shadow-lg
  rounded
  md:w-3/7
`;

const form = css`
  display: flex;
  flex-direction: column;
  margin-top: 10px;
`;

const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
  e.preventDefault();
};

const FormStyle: React.FC = ({ children }) => {
  return <div css={formWrapper}>{children}</div>;
};

export default FormStyle;
