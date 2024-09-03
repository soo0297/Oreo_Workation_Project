import styled from 'styled-components';
import useAuth from './custom/useAuth';
import oreo from '../assets/oreo.png';

const Register = ({ closeModal }) => {
  let user = {
    email: '',
    password: '',
    nickname: ''
  };

  const { handleSignUp } = useAuth();

  return (
    <Container>
      <Logo>
        <img src={oreo} />
      </Logo>
      <Input_Label>Email</Input_Label>
      <input type="text" onChange={(e) => (user.email = e.target.value)} placeholder="아이디" />
      <Input_Label>Password</Input_Label>
      <input type="password" onChange={(e) => (user.password = e.target.value)} placeholder="비밀번호" />
      <Input_Label>Nickname</Input_Label>
      <input type="text" onChange={(e) => (user.nickname = e.target.value)} placeholder="닉네임" />
      <button onClick={() => handleSignUp(user, closeModal)}>Sign up</button>
      {/* <button onClick={}>로그인하러 가기</button> */}
    </Container>
  );
};

const Logo = styled.div`
  height: 30px;
  width: 30px;

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
  /* background: yellow; */

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  input {
    width: 80%;
    height: 30px;

    border: 1px solid #999;
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

export default Register;
