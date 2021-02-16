/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { LoginInPut } from "./globalTypes";

// ====================================================
// GraphQL mutation operation: loginMutation
// ====================================================

export interface loginMutation_login {
  __typename: "LoginOutPut";
  ok: boolean;
  error: string | null;
  token: string | null;
}

export interface loginMutation {
  login: loginMutation_login;
}

export interface loginMutationVariables {
  loginInput: LoginInPut;
}
