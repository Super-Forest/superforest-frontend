import React from 'react';
import tw from 'twin.macro';

const title = tw`
  text-6xl
  font-bold
  text-center
  mb-14
`;

interface WelcomTitle {
  text: string;
}

const WelcomTitle = ({ text }: WelcomTitle) => {
  return <h1 css={title}>{text}</h1>;
};

export default WelcomTitle;
