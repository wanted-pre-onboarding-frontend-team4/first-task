import { useState } from "react";
import LoginSignUpForm from "../components/common/LoginSignUpForm";

const SignUp = () => {
  const [input, setInput] = useState({
    emailInput: "",
    pwInput: "",
    pwCheck: "",
  });

  const clickSignUpBtn = () => {};

  return (
    <LoginSignUpForm
      title="회원가입"
      input={input}
      setInput={setInput}
      btnClick={clickSignUpBtn}
    />
  );
};

export default SignUp;
