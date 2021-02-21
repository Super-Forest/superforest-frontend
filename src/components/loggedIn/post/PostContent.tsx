import React from 'react';
import tw from 'twin.macro';

const imgContainer = tw`
  flex
  items-center
  justify-center 
`;

const imgWrapper = tw`
  w-full
  h-350px
  mx-5
  mb-5
`;

const image = tw`
  h-full
  w-full
  rounded-lg
`;

const textContainer = tw`
  mx-5
  pb-5
`;

const text = tw`
  text-2xl
  leading-relaxed
  tracking-tight
`;

const PostContent = () => {
  return (
    <section>
      <div css={imgContainer}>
        <div css={imgWrapper}>
          <img
            css={image}
            src="https://images.unsplash.com/photo-1613820070607-ef1d3ccc07f9?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80 334w"
          />
        </div>
      </div>
      <div css={textContainer}>
        <p css={text}>{'일요일은 파자마 입은채로 뒹굴뒹굴이 최고야 🛌 (나만 그래? 😏)'}</p>
      </div>
    </section>
  );
};

export default PostContent;
