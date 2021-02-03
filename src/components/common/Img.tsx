import React from 'react';

type ImageType = {
  name: string;
};

const Img = ({ name }: ImageType) => {
  return <img src={`./images/${name}`} />;
};
export default Img;
