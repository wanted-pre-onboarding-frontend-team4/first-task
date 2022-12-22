import { useState } from 'react';
import LoginSignUpForm from '../components/common/LoginSignUpForm';
import Title from '../components/common/Title';

const SignUp = () => {
  const [input, setInput] = useState({
    emailInput: '',
    pwInput: '',
    pwCheck: '',
  });

  const clickSignUpBtn = () => {};

  return (
    <>
      <Title />
      <LoginSignUpForm
        title='회원가입'
        input={input}
        setInput={setInput}
        btnClick={clickSignUpBtn}
      />
    </>
  );
};

export default SignUp;
