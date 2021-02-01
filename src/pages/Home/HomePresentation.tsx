import React from 'react';
import tw from 'twin.macro';
import { css } from '@emotion/react';

const container = tw`
  flex
  min-h-full
`;

const aside = css`
  flex: 0.5;
  width: 300px;
  min-height: 100vh;
  padding: 0 2rem;
`;

const section = css`
  flex: 2;
  border-left: 1px solid #e3e3e3;
  border-right: 1px solid #e3e3e3;
`;

const profileContainer = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 2.5rem 0;
`;

const profile = css`
  height: 100px;
  width: 100px;
  background-color: #e3e3e3;
  border-radius: 50%;
`;

const profileName = css`
  margin: 1.2rem 0;
`;

const buttonStyle = css`
  color: white;
  font-weight: bold;
  border-radius: 1.2rem;
`;

const HomePresentation = () => {
  return (
    <div css={container}>
      <aside css={aside}>
        <div css={profileContainer}>
          <div css={profile}></div>
          <p css={profileName}>유저 이름</p>
          <button css={buttonStyle} role="button">
            글쓰기
          </button>
        </div>
        <div></div>
      </aside>
      <section css={section}></section>
    </div>
  );
};

export default HomePresentation;
