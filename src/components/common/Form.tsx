import React from 'react';
import { Link } from 'react-router-dom';

import { css } from '@emotion/react';
import tw from 'twin.macro';

const form = css`
  display: flex;
  flex-direction: column;
`;

const SignInButton = tw`
bg-gray-100
shadow
h-16
rounded-lg
my-7
`;

const label = tw`
h-12
text-gray-600
text-2xl
mt-2
font-bold
`;

const input = tw`
h-16
mb-4
border
border-gray-400
shadow-none
border-solid
rounded-lg
`;

const link = css`
  display: flex;
  justify-content: space-between;
`;

const Form: React.FC = () => {
  return (
    <form css={form}>
      <label css={label} htmlFor="email">
        email
      </label>
      <input css={input} id="email" type="email" />
      <label css={label} htmlFor="password">
        password
      </label>
      <input css={input} id="password" type="password" />
      <button css={SignInButton} type="submit">
        Sing in
      </button>
      <div css={link}>
        <Link to="/findpassword">Forgot password?</Link>
        <Link to="/signup">Create Account</Link>
      </div>
    </form>
  );
};

export default Form;
