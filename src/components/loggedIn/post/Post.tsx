import React from 'react';
import PostContent from './PostContent';
import PostFooter from './PostFooter';
import PostHeader from './PostHeader';

const Post = () => {
  return (
    <article>
      <PostHeader />
      <PostContent />
      <PostFooter />
    </article>
  );
};

export default Post;
