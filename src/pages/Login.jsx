import { useState } from 'react';
import LoginSignUpForm from '../components/common/LoginSignUpForm';

const Login = () => {
  const [input, setInput] = useState({ emailInput: '', pwInput: '' });

  const clickLoginBtn = () => {};

  return (
    <LoginSignUpForm title='로그인' input={input} setInput={setInput} btnClick={clickLoginBtn} />
  );
};

export default Login;
