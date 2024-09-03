import styled from 'styled-components';
import useAuth from './custom/useAuth';
import useModal from './custom/useModal';
import { Link } from 'react-router-dom';
import { userContext } from './context/User';
import ModalContent from './common/ModalContent';
import oreo from '../assets/oreo.png';

const Navibar = () => {
  const { isSignedIn, profileUrl } = userContext();
  const { handleSignIn, handleSignUp } = useAuth();
  const { isTypeModalOpen, openTypeModal, closeModal } = useModal();

  return (
    <NavigationBar>
      <Wrapper>
        <LeftItemWrapper>
          <img src={oreo} />
        </LeftItemWrapper>
        <RightItemWrapper>
          {isSignedIn ? (
            <ImageWrapper>
              <Link to={'/mypage'}>
                <img src={profileUrl} />
              </Link>
            </ImageWrapper>
          ) : (
            <RightItemContainer>
              <button onClick={() => openTypeModal('login')}>로그인</button>
              <button onClick={() => openTypeModal('register')}>회원가입</button>
            </RightItemContainer>
          )}
        </RightItemWrapper>
        {isTypeModalOpen && (
          <ModalContent
            type={isTypeModalOpen}
            closeModal={closeModal}
            handleSignIn={handleSignIn}
            handleSignUp={handleSignUp}
          />
        )}
      </Wrapper>
    </NavigationBar>
  );
};

const NavigationBar = styled.nav`
  position: fixed;
  top: 0;

  background: white;
  width: 100%;
  height: 80px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  display: flex;
  justify-content: center;
  align-items: center;

  z-index: 2;
`;

const Wrapper = styled.div`
  width: 80%;
  height: 100%;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const RightItemWrapper = styled.div`
  height: 70%;
  width: auto;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const RightItemContainer = styled.div`
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;

  button {
    height: 70%;
    aspect-ratio: 16 / 9;

    border: none;
    border-radius: 15px;
  }
`;

const LeftItemWrapper = styled.div`
  height: 70%;
  aspect-ratio: 16 / 9;

  display: flex;

  img {
    object-fit: cover;
  }
`;

const ImageWrapper = styled.div`
  height: 100%;
  aspect-ratio: 1;

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

export default Navibar;
