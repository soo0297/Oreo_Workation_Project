import styled from 'styled-components';
import useAuth from './custom/useAuth';

const Login = ({ toggleModal }) => {
  let user = {
    email: '',
    password: ''
  };

  const { handleSignIn } = useAuth();

  return (
    <Container>
      <input type="text" onChange={(e) => (user.email = e.target.value)} />
      <input type="password" onChange={(e) => (user.password = e.target.value)} />
      <button onClick={() => handleSignIn(user, toggleModal)}>로그인</button>
    </Container>
  );
};

const Container = styled.div`
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
