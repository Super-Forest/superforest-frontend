import React, { FormEventHandler } from 'react';
import { BiImageAdd } from 'react-icons/bi';
import { FaVoteYea } from 'react-icons/fa';
import tw from 'twin.macro';
import { css } from '@emotion/react';
import Button from 'components/common/Button';
import ButtonGroup from 'components/common/ButtonGroup';
import Form from 'components/common/Form';
import FormTextArea from 'components/common/FormTextArea';
import Tab from 'components/loggedIn/Tab';

interface Prop {
  handleSubmit: FormEventHandler<HTMLFormElement>;
}

const container = tw`
  container
  mx-auto
  md:w-9/12
  w-full
`;

const form = tw`
  flex
  flex-col
  items-center
  p-10
  pb-5
  mt-5
  w-full
  bg-white
`;

const textArea = tw`
  w-full
  h-100px
  p-3
  border
  border-gray-300
  rounded-md
  resize-none
`;

const buttonWrapper = tw`
  flex
  items-center
  justify-between
  w-full
  mt-5
`;

const buttonGroup = css`
  display: flex;
  align-items: center;

  & button {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 52px;
    width: 52px;
    &:hover {
      background-color: rgb(209, 250, 229);
      border-radius: 50%;
    }
    svg {
      height: 28px;
      width: 28px;
      color: rgb(51, 211, 153);
    }
  }
`;

const submitButton = tw`
  px-8
  h-30px
  rounded-3xl
  bg-green-400
  font-medium
  text-white
  text-2xl
`;

const HomePresentation = ({ handleSubmit }: Prop) => {
  return (
    <>
      <Tab />
      <div css={container}>
        <Form css={form}>
          <FormTextArea css={textArea} />
          <div css={buttonWrapper}>
            <ButtonGroup css={buttonGroup}>
              <Button type="button">
                <BiImageAdd />
              </Button>
              <Button type="button">
                <FaVoteYea />
              </Button>
            </ButtonGroup>
            <Button css={submitButton} text={'데롱'} type="button" />
          </div>
        </Form>
      </div>
    </>
  );
};

export default HomePresentation;
