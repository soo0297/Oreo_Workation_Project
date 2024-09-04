import styled from 'styled-components';
import oreo from '../assets/oreo.png';

const Login = ({ closeModal, handleSignIn }) => {
  let user = {
    email: '',
    password: ''
  };

  return (
    <Container>
      <Logo>
        <img src={oreo} />
      </Logo>
      <Input_Label>Email</Input_Label>
      <input type="text" onChange={(e) => (user.email = e.target.value)} placeholder="아이디" />
      <Input_Label>Password</Input_Label>
      <input type="password" onChange={(e) => (user.password = e.target.value)} placeholder="비밀번호" />
      <button onClick={() => handleSignIn(user, closeModal)}>Sign in</button>
    </Container>
  );
};

const Logo = styled.div`
  height: 30px;
  width: 30px;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    height: 80px;
    width: 200px;
  }
`;

const Input_Label = styled.div`
  width: 80%;
  text-align: left;
  margin-top: 30px;
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  /* background: purple; */

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

  input {
    width: 80%;
    height: 30px;
    margin-top: 5px;
    border: 1px solid #bbb;
    border-radius: 10px;
  }

  button {
    margin-top: 40px;
    width: 200px;
    height: 33px;
    border-radius: 8px;
    border: none;
    background-color: #333;
    color: white;
    cursor: pointer;
    &:hover {
      background-color: #222;
    }
  }
`;

export default Login;
