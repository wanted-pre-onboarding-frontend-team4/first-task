import { useState } from 'react';
import Title from '../components/common/Title';
import LoginSignUpForm from '../components/common/LoginSignUpForm';

const Login = () => {
  const [input, setInput] = useState({ emailInput: '', pwInput: '' });

  const clickLoginBtn = () => {};

  return (
    <>
      <Title />
      <LoginSignUpForm title='로그인' input={input} setInput={setInput} btnClick={clickLoginBtn} />
    </>
  );
};

export default Login;
