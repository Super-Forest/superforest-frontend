import React from 'react';
import SignUpPresentation from './SignUpPresentation';
import { gql, useMutation } from '@apollo/client';

const CREATE_ACCOUNT = gql`
  mutation createAccount($createAccountInput: CreateAccountInput!) {
    createAccount(input: $createAccountInput) {
      ok
      error
    }
  }
`;

const SignUpContainer = () => {
  const [createAccount, { data }] = useMutation(CREATE_ACCOUNT);

  return <SignUpPresentation />;
};

export default SignUpContainer;
