import React from 'react';
import SignUpForm from 'components/loggedOut/SignUpForm';
import WelcomTitle from 'components/common/WelcomTitle';
import FormStyle from 'components/common/FormStyle';
import WelcomImg from 'components/common/WelcomImg';
import { css } from '@emotion/react';

const SignUpPresentation = () => {
  return (
    <FormStyle>
      <SignUpForm />
    </FormStyle>
  );
};

export default SignUpPresentation;
