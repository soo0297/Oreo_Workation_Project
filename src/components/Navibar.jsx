import styled from 'styled-components';
import useAuth from './custom/useAuth';
import Modal from './common/Modal';
import Login from './Login';
import useModal from './custom/useModal';

const Navibar = () => {
  const { isSignedIn, handleSignIn } = useAuth();
  const { isModalOpen, toggleModal } = useModal();

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
        {isSignedIn ? (
          <div
            style={{
              height: '70%',
              width: '80px',
              background: 'white'
            }}
          ></div>
        ) : (
          <button onClick={toggleModal}>로그인</button>
        )}
      </RightItem_Wrapper>
      {isModalOpen && (
        <Modal toggleModal={toggleModal} $width="25%" $height="40%">
          <Login toggleModal={toggleModal} handleSignIn={handleSignIn}></Login>
        </Modal>
      )}
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
  background: blue;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export default Navibar;
