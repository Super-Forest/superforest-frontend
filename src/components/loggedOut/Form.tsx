import React from 'react';
import { Link } from 'react-router-dom';
import { css } from '@emotion/react';
import tw from 'twin.macro';
import { checkEmailValid } from 'lib/utils';
import FormInput from 'components/common/FormInput';
import FormLabel from 'components/common/FormLabel';
import Button from 'components/common/Button';
import { useForm } from 'react-hook-form';
import { gql, useMutation } from '@apollo/client';
import { loginMutation, loginMutationVariables } from '__generated__/loginMutation';
import { LoginInPut } from '__generated__/globalTypes';

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

const LOGIN_MUTATION = gql`
  mutation loginMutation($loginInput: LoginInPut!) {
    login(input: $loginInput) {
      ok
      error
      token
    }
  }
`;

interface IForm {
  email: string;
  password: string;
}

const Form: React.FC = () => {
  const { register, watch, handleSubmit, errors, getValues } = useForm<IForm>();
  const [loginMutation, { data }] = useMutation<loginMutation, loginMutationVariables>(
    LOGIN_MUTATION,
    {
      onCompleted: (data: loginMutation) => {
        const {
          login: { ok, error, token },
        } = data;
        if (ok) {
          console.log(token);
        }
      },
    },
  );
  const handleSignIn = () => {
    const { email, password } = getValues();
    //isLoggedInVar(true);
    loginMutation({
      variables: {
        loginInput: {
          email,
          password,
        },
      },
    });
  };

  const onInValid = () => {
    console.log('cant sign in');
  };
  return (
    <form css={form} onSubmit={handleSubmit(handleSignIn, onInValid)}>
      <FormLabel css={label} htmlFor={'email'} text={'Email'} />
      <FormInput
        css={input}
        name={'email'}
        placeholder="email@supertree.co"
        ref={register({
          required: 'Email is required',
          pattern: /^[A-Za-z0-9._%+-]+@supertree.co$/,
        })}
        type="email"
      />
      {errors.email?.message && (
        <span css={tw`font-bold text-red-600`}>{errors.email?.message}</span>
      )}
      {errors.email?.type === 'pattern' && (
        <span css={tw`font-bold text-red-600`}>Only SuperTree Email is Allowed</span>
      )}
      <FormLabel css={label} htmlFor={'password'} text={'Password'} />
      <FormInput
        css={input}
        name={'password'}
        ref={register({
          required: 'Password should not be empty',
        })}
        type="password"
      />
      {errors.password?.message && (
        <span css={tw`font-bold text-red-600`}>{errors.password?.message}</span>
      )}

      <Button css={SignInButton} text={'Sign In'} type="submit" />
      <div css={link}>
        <Link to="/findpassword">Forgot password?</Link>
        <Link to="/signup">Create Account</Link>
      </div>
    </form>
  );
};

export default Form;
