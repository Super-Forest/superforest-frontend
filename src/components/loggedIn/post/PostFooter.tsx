import React from 'react';
import tw from 'twin.macro';

const actionWrapper = tw``;

const commentWrapper = tw``;

const replyWrapper = tw``;

const PostFooter = () => {
  return (
    <section>
      <div css={actionWrapper}></div>
      <div css={commentWrapper}></div>
      <div css={replyWrapper}></div>
    </section>
  );
};

export default PostFooter;
