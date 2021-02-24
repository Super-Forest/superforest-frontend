import React from 'react';
import TextareaAutosize from 'react-textarea-autosize';
import { css } from '@emotion/react';
import tw from 'twin.macro';
import { BiComment, BiLike } from 'react-icons/bi';
import ButtonGroup from 'components/common/ButtonGroup';
import Button from 'components/common/Button';
import Form from 'components/common/Form';

const footer = tw`
  mx-5
  pb-5
`;

const actionWrapper = tw`
  flex
  flex-col
  py-1
`;

const buttonGroup = tw`
  flex
`;

const button = tw`
  flex
  items-center
  px-2
`;

const like = css`
  height: 25px;
  width: 25px;
`;

const comment = css`
  height: 25px;
  width: 25px;
`;

const likeWrapper = tw`
  flex
  items-center
  text-xl
`;
const commentWrapper = tw`
  flex
  items-center
  text-xl
`;

const replyWrapper = tw`
  mt-5
`;

const form = css`
  display: flex;
  padding: 5px 50px 5px 10px;
  background-color: #e3e3e3;
  border-radius: 2rem;
`;

const textArea = css`
  width: 100%;
  font-size: 16px;
  line-height: 1.45;
  border: none;
  background: none;
  appearance: none;
  outline: none;
  resize: none;
`;

const PostFooter = () => {
  return (
    <section css={footer}>
      <div css={actionWrapper}>
        <ButtonGroup css={buttonGroup}>
          <Button css={button} type="button">
            <div css={likeWrapper}>
              <BiLike css={like} />
              <span>100</span>
            </div>
          </Button>
          <Button css={button} type="button">
            <div css={commentWrapper}>
              <BiComment css={comment} />
              <span>100</span>
            </div>
          </Button>
        </ButtonGroup>
      </div>
      <div css={replyWrapper}>
        <Form css={form}>
          <TextareaAutosize
            css={textArea}
            maxLength={500}
            maxRows={4}
            placeholder={'Leave a comment'}
          />
        </Form>
      </div>
    </section>
  );
};

export default PostFooter;
