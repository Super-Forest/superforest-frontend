import React, { ChangeEvent, FormEvent, MouseEvent, useState } from 'react';
import { css } from '@emotion/react';
import tw from 'twin.macro';
import { checkEmailValid } from 'lib/utils';
import FormInput from 'components/common/FormInput';
import FormLabel from 'components/common/FormLabel';
import Button from 'components/common/Button';
import WelcomTitle from 'components/common/WelcomTitle';
import WelcomImg from 'components/common/WelcomImg';

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

const SignUpForm: React.FC = () => {
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
  const handleSignIn = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <form css={form} onSubmit={handleSignIn}>
      <WelcomTitle text={'Sign Up'} />
      <WelcomImg name={'Mikey.png'} />

      <FormLabel css={label} htmlFor={'email'} text={'Email'} />
      <FormInput
        css={input}
        name={'email'}
        onChange={handleEmailOnChange}
        placeholder="email@supertree.co"
        type="email"
        value={email}
      />
      <FormLabel css={label} htmlFor={'password'} text={'Password'} />
      <FormInput
        css={input}
        name={'passowrd'}
        onChange={handlePasswordOnChange}
        type="password"
        value={password}
      />
      <FormLabel css={label} htmlFor={'passwordcheck'} text={'password check'} />
      <FormInput
        css={input}
        name={'passwordcheck'}
        onChange={handlePasswordOnChange}
        type="password"
        value={password}
      />
      <Button css={SignUpButton} text={'Sign Up'} type="submit" />
    </form>
  );
};

export default SignUpForm;
