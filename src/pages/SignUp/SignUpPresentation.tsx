import React from 'react';
import tw from 'twin.macro';
import Form from 'components/loggedOut/Form';
import WelcomTitle from 'components/common/WelcomTitle';
import FormStyle from 'components/common/FormStyle';
import WelcomImg from 'components/common/WelcomImg';

const SignUpPresentation = () => {
  return (
    <FormStyle>
      <WelcomTitle text={'Sign Up'} />
      <WelcomImg name={'Mikey.png'} />
      <Form />
    </FormStyle>
  );
};

export default SignUpPresentation;
