import React from 'react';
import tw from 'twin.macro';

const container = tw`
  flex
  items-center
  py-4
  mb-8
`;

const headerImageWrapper = tw`
  h-40px
  w-40px
  mx-5
`;

const headerInfoWrapper = tw`
  flex
  flex-col
  justify-center
  text-lg
`;

const userName = tw`
  text-2xl
  font-semibold
`;

const PostHeader = () => {
  return (
    <section css={container}>
      <div css={headerImageWrapper}>
        <img src={'https://t1.kakaocdn.net/friends/prod/main_tab/feed/npc_20201228113659.png'} />
      </div>
      <div css={headerInfoWrapper}>
        <p css={userName}>User</p>
        <div>
          <span>1 hour(s) ago</span>
        </div>
      </div>
    </section>
  );
};

export default PostHeader;
