import React from 'react';
import tw from 'twin.macro';
import { css } from '@emotion/react';
import { BiHappy, BiImageAdd } from 'react-icons/bi';

import Button from 'components/common/Button';
import Form from 'components/common/Form';
import FormTextArea from 'components/common/FormTextArea';

const aside = css`
  display: flex;
  flex-direction: column;
  flex: 0.5;
  width: 300px;
  min-height: 100vh;
  margin-top: 1rem;
`;

const section = css`
  flex: 1;
  margin: 1rem 1rem 0 1rem;
`;

const profileContainer = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem 5rem;
  width: 100%;
  background-color: white;
`;

const menuContainer = css`
  flex: 1;
  margin-top: 1rem;
  background-color: white;
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
  width: 200px;
  height: 50px;
  font-weight: bold;
  border-radius: 1.2rem;
  color: white;
`;

const formContainer = css`
  display: flex;
  flex-direction: column;
  padding: 2rem;
  background-color: white;
`;

const formTextArea = css`
  width: 100%;
  height: 80px;
  padding: 0.8rem;
  border-radius: 10px;
  resize: none;
`;

const buttonContainer = css`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const buttonGroup = css`
  display: flex;
  & .image_button,
  .emoji_button {
    display: flex;

    & svg {
      font-size: 2.5rem;
    }
  }
`;

const HomePresentation = () => {
  return (
    <div css={tw`flex min-h-full`}>
      <aside css={aside}>
        <div css={profileContainer}>
          <div css={profile}></div>
          <p css={profileName}>유저 이름</p>
          <Button css={[buttonStyle, tw`bg-green-400`]} text={'글쓰기'} type={'button'} />
        </div>
        <div css={menuContainer}></div>
      </aside>
      <section css={section}>
        <div css={formContainer}>
          <Form>
            <FormTextArea css={formTextArea} value={'a'} />
            <div css={buttonContainer}>
              <div className="button_group" css={buttonGroup}>
                <Button className="image_button" type="button">
                  <BiImageAdd />
                </Button>
                <Button className="emoji_button" type="button">
                  <BiHappy />
                </Button>
              </div>
              <Button text="제출" type="submit" />
            </div>
          </Form>
        </div>
      </section>
      <section css={aside}></section>
    </div>
  );
};

export default HomePresentation;
