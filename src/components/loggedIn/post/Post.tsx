import React from 'react';
import PostContent from './PostContent';
import PostFooter from './PostFooter';
import PostHeader from './PostHeader';

interface Prop {
  className?: string;
  css?: any;
}

const Post = ({ className, css }: Prop) => {
  return (
    <article className={className} css={css}>
      <PostHeader />
      <PostContent />
      <PostFooter />
    </article>
  );
};

export default Post;
