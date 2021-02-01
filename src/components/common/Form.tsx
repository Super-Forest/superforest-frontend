import React from 'react';
import { css } from '@emotion/react';

const form = css``;

const Form: React.FC = () => {
  return (
    <form css={form}>
      <label htmlFor="email">email</label>
      <input id="email" type="email" />
      <label htmlFor="password">password</label>
      <input type="password" />
      <button type="submit">Sing in</button>
      <p>Forgot password?</p>
      <p>Create Account</p>
    </form>
  );
};

export default Form;
