import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { signUpApi } from '../apis/auth';
import LoginSignUpForm from '../components/common/LoginSignUpForm';
import Title from '../components/common/Title';

const SignUp = () => {
  const navigate = useNavigate();
  const [input, setInput] = useState({
    emailInput: '',
    pwInput: '',
    pwCheck: '',
  });

  useEffect(() => {
    if (localStorage.getItem('token')) {
      alert('이미 로그인하셨습니다. 투두리스트로 이동합니다.');
      navigate('/todo');
    }
  }, []);

  const clickSignUpBtn = async (body) => {
    try {
      const res = await signUpApi(body);
      const accessToken = res.access_token;
      localStorage.setItem('token', accessToken);
      alert(`회원가입되었습니다`);
      navigate('/todo');
    } catch (error) {
      alert(`인증 에러 : ${error.response.data.message}`);
    }
  };

  return (
    <>
      <Title />
      <LoginSignUpForm
        title='회원가입'
        input={input}
        setInput={setInput}
        btnClick={() => clickSignUpBtn({ email: input.emailInput, password: input.pwInput })}
      />
    </>
  );
};

export default SignUp;
