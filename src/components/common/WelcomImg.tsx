import React from 'react';
import { css } from '@emotion/react';
import Img from 'components/common/Img';

interface WelcomImg {
  name: string;
}

const WelcomImg = ({ name }: WelcomImg) => {
  const imgWrapper = css`
    display: flex;
    align-items: center;
    width: 220px;
    height: 220px;
    border-radius: 50%;
    background-color: #f9f9f9;
    margin: 8px auto;
  `;

  return (
    <div css={imgWrapper}>
      <Img name={name} />
    </div>
  );
};

export default WelcomImg;
