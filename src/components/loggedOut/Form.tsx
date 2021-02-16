import React from 'react';
import { Link } from 'react-router-dom';
import { css } from '@emotion/react';
import { gql, useMutation } from '@apollo/client';
import tw from 'twin.macro';

import FormInput from 'components/common/FormInput';
import FormLabel from 'components/common/FormLabel';
import Button from 'components/common/Button';
import WelcomTitle from 'components/common/WelcomTitle';
import WelcomImg from 'components/common/WelcomImg';
import { useForm } from 'react-hook-form';
import { loginMutation, loginMutationVariables } from '__generated__/loginMutation';
import { authToken, isLoggedInVar } from 'apollo';
import { saveToken } from 'lib/utils';

const LOGIN = gql`
  mutation loginMutation($loginInput: LoginInPut!) {
    login(input: $loginInput) {
      ok
      error
      token
    }
  }
`;

const form = css`
  display: flex;
  flex-direction: column;
  margin-top: 10px;
`;

const SignInButton = tw`
  h-16  
  bg-gray-100
  shadow
  rounded-lg
  my-7
  font-semibold
  hover:bg-gray-200
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

interface IForm {
  email: string;
  password: string;
  passwordCheck: string;
}

const Form: React.FC = () => {
  const { register, getValues, handleSubmit, errors } = useForm<IForm>({
    mode: 'onChange',
  });
  const [loginMutation] = useMutation<loginMutation, loginMutationVariables>(LOGIN, {
    onCompleted: (data: loginMutation) => {
      const {
        login: { ok, token },
      } = data;

      if (ok && token) {
        saveToken(token, isLoggedInVar, authToken);
      }
    },
    onError: () => null,
  });
  const handleSignIn = () => {
    const { email, password } = getValues();
    loginMutation({
      variables: {
        loginInput: {
          email,
          password,
        },
      },
    });
  };

  return (
    <div>
      <WelcomTitle text={'Sign In'} />
      <WelcomImg name={'Peppa.png'} />
      <form css={form} onSubmit={handleSubmit(handleSignIn)}>
        <FormLabel css={label} htmlFor={'email'} text={'Email'} />
        <FormInput
          css={input}
          name="email"
          placeholder="email@supertree.co"
          ref={register({
            required: 'Email is required',
            pattern: /^[A-Za-z0-9._%+-]+@supertree.co$/,
          })}
          type="email"
        />
        <FormLabel css={label} htmlFor={'password'} text={'Password'} />
        <FormInput
          css={input}
          name="password"
          ref={register({
            required: true,
            minLength: 5,
          })}
          type="password"
        />
        <Button css={SignInButton} text={'Sign In'} type="submit" />
        <div css={link}>
          <Link to="/findpassword">Forgot password?</Link>
          <Link to="/signup">Create Account</Link>
        </div>
      </form>
    </div>
  );
};

export default Form;
