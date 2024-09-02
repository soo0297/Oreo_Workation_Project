import styled from 'styled-components';
import useAuth from './custom/useAuth';
import Modal from './common/Modal';
import Login from './Login';
import useModal from './custom/useModal';
import { userContext } from './context/User';
import { Link } from 'react-router-dom';
import useAuthStorage from './custom/useAuthStorage';

const Navibar = () => {
  const { profileUrl } = userContext();
  const { handleSignIn } = useAuth();
  const { getSignInFlag } = useAuthStorage();
  const { isModalOpen, toggleModal } = useModal();

  const signInFlag = getSignInFlag();

  return (
    <NavigationBar>
      <div
        style={{
          height: '70%',
          width: '80px',
          background: 'white'
        }}
      ></div>
      <RightItem_Wrapper>
        {signInFlag == 'true' && profileUrl ? (
          <Image_Wrapper>
            <Link to={'/mypage'}>
              <img src={profileUrl} />
            </Link>
          </Image_Wrapper>
        ) : (
          <button onClick={toggleModal}>로그인</button>
        )}
      </RightItem_Wrapper>
      {isModalOpen && (
        <Modal toggleModal={toggleModal} $width="25%" $height="40%">
          <Login toggleModal={toggleModal} handleSignIn={handleSignIn}></Login>
        </Modal>
      )}
      {signInFlag && <Write_Btn onClick={toggleModal}>작성</Write_Btn>}
    </NavigationBar>
  );
};

const NavigationBar = styled.nav`
  background: green;
  height: 80px;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  padding-left: 30px;
  padding-right: 100px;
`;

const RightItem_Wrapper = styled.div`
  height: 70%;
  width: 80px;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const Image_Wrapper = styled.div`
  width: 100%;
  height: 100%;

  border: 1px solid black;
  border-radius: 10px;

  display: flex;
  justify-content: center;
  align-items: center;

  overflow: hidden;

  img {
    width: 100%;
    height: 100%;

    object-fit: cover;
  }
`;

const Write_Btn = styled.button`
  width: 50px;
  height: 50px;
  border-radius: 25%;
  position: fixed;
  bottom: 20px;
  right: 20px;

  z-index: 1;
`;

export default Navibar;
