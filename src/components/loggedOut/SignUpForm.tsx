import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { gql, useMutation } from '@apollo/client';
import { css } from '@emotion/react';
import tw from 'twin.macro';
import FormInput from 'components/common/FormInput';
import FormLabel from 'components/common/FormLabel';
import Button from 'components/common/Button';
import WelcomTitle from 'components/common/WelcomTitle';
import WelcomImg from 'components/common/WelcomImg';
import {
  createAccountMutation,
  createAccountMutationVariables,
} from '__generated__/createAccountMutation';

const CREATE_ACCOUNT = gql`
  mutation createAccountMutation($createAccountInput: CreateAccountInPut!) {
    createAccount(input: $createAccountInput) {
      ok
      error
    }
  }
`;

const form = css`
  display: flex;
  flex-direction: column;
`;

const SignUpButton = tw`
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

const link = tw`
text-right
`;

interface IForm {
  email: string;
  password: string;
  passwordCheck: string;
}

const SignUpForm: React.FC = () => {
  const history = useHistory();
  const { register, getValues, handleSubmit, watch } = useForm<IForm>();
  const [createAccountMutation, { data }] = useMutation<
    createAccountMutation,
    createAccountMutationVariables
  >(CREATE_ACCOUNT, {
    onCompleted: (data: createAccountMutation) => {
      const {
        createAccount: { ok, error },
      } = data;
      if (ok) {
        history.push('/');
      }
    },
  });

  const onInValid = () => {
    console.log('can not signup');
  };

  const handleSignIn = () => {
    const { email, password } = getValues();
    createAccountMutation({
      variables: {
        createAccountInput: {
          email,
          password,
        },
      },
    });
  };

  return (
    <form css={form} onSubmit={handleSubmit(handleSignIn, onInValid)}>
      <WelcomTitle text={'Sign Up'} />
      <WelcomImg name={'Mikey.png'} />
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
      <FormLabel css={label} htmlFor={'password'} text={'Password'} />
      <FormInput
        css={input}
        name={'password'}
        ref={register({
          required: true,
          minLength: 5,
        })}
        type="password"
      />
      <FormLabel css={label} htmlFor={'passwordcheck'} text={'password check'} />
      <FormInput
        css={input}
        name={'passwordcheck'}
        ref={register({
          required: true,
          minLength: 5,
          validate: (value) => {
            return value === watch('password');
          },
        })}
        type="password"
      />
      <Button css={SignUpButton} text={'Sign Up'} type="submit" />
      <Link css={link} to="/">
        SignIn
      </Link>
    </form>
  );
};

export default SignUpForm;
