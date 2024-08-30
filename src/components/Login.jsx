import styled from 'styled-components';
import Register from './Register';
import { useState } from 'react';

const Login = ({ toggleModal, handleSignIn }) => {
  let user = {
    email: '',
    password: ''
  };

  const [isRegisterOpen, setIsRegisterOpen] = useState(false);

  return (
    <Container>
      <input type="text" onChange={(e) => (user.email = e.target.value)} />
      <input type="password" onChange={(e) => (user.password = e.target.value)} />
      <button onClick={() => handleSignIn(user, toggleModal)}>로그인</button>
      <button onClick={() => setIsRegisterOpen((prev) => !prev)}>회원가입</button>
      {isRegisterOpen && <Register setIsRegisterOpen={setIsRegisterOpen} />}
    </Container>
  );
};

const Container = styled.div`
  position: relative;

  width: 100%;
  height: 100%;
  background: purple;

  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;

  input {
    width: 80%;
    height: 30px;

    border: none;
    border-radius: 10px;
  }
`;

export default Login;
