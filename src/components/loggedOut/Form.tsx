import React, { ChangeEvent, MouseEvent, useState } from 'react';
import { Link } from 'react-router-dom';
import { css } from '@emotion/react';
import tw from 'twin.macro';
import { checkEmailValid } from 'lib/utils';

const form = css`
  display: flex;
  flex-direction: column;
`;

const SignInButton = tw`
  h-16  
  bg-gray-100
  shadow
  rounded-lg
  my-7
  font-semibold
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
  px-3
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
  & a {
    color: black;
    text-decoration: underline;
  }
`;

const Form: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isEmailInValid, setIsEmailInValid] = useState(false);
  const [isPasswordEmpty, setIsPasswordEmpty] = useState(false);

  const handleEmailOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    const {
      target: { value },
    } = e;
    setEmail(value);
    if (checkEmailValid(email)) {
      setIsEmailInValid(false);
    } else {
      setIsEmailInValid(true);
    }
  };
  const handlePasswordOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    const {
      target: { value },
    } = e;
    setPassword(value);
  };
  const handleSignIn = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
  };
  return (
    <form css={form}>
      <label css={label} htmlFor="email">
        Email
      </label>
      <input
        css={input}
        id="email"
        onChange={handleEmailOnChange}
        placeholder="email@supertree.co"
        type="email"
        value={email}
      />
      <label css={label} htmlFor="password">
        Password
      </label>
      <input
        css={input}
        id="password"
        onChange={handlePasswordOnChange}
        type="password"
        value={password}
      />
      <button css={SignInButton} onClick={handleSignIn} type="submit">
        Sign In
      </button>
      <div css={link}>
        <Link to="/findpassword">Forgot password?</Link>
        <Link to="/signup">Create Account</Link>
      </div>
    </form>
  );
};

export default Form;
