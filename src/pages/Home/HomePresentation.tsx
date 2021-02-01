import React from 'react';
import Form from 'components/Form/Form';

import tw from 'twin.macro';

const container = tw`
container
mx-auto


`;

const HomePresentation = () => {
  return (
    <div css={container}>
      <Form />
    </div>
  );
};

export default HomePresentation;
