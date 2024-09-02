import styled from 'styled-components';
import useAuth from './custom/useAuth';

const Register = ({ closeModal }) => {
  let user = {
    email: '',
    password: '',
    nickname: ''
  };

  const { handleSignUp } = useAuth();

  return (
    <Container>
      <input type="text" onChange={(e) => (user.email = e.target.value)} />
      <input type="password" onChange={(e) => (user.password = e.target.value)} />
      <input type="text" onChange={(e) => (user.nickname = e.target.value)} />
      <button onClick={() => handleSignUp(user, closeModal)}>가입하기</button>
      {/* <button onClick={}>로그인하러 가기</button> */}
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100%;
  background: yellow;

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

export default Register;
