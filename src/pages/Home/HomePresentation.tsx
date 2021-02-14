import React, { FormEventHandler } from 'react';
import tw from 'twin.macro';

interface Prop {
  handleSubmit: FormEventHandler<HTMLFormElement>;
}

const container = tw`
  container
`;

const HomePresentation = ({ handleSubmit }: Prop) => {
  return <div css={container}></div>;
};

export default HomePresentation;
