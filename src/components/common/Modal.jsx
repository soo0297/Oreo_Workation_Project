import { useRef } from 'react';
import styled from 'styled-components';
import React from 'react';

const Modal = ({ $width, $height, children, toggleModal }) => {
  // 백그라운드 클릭시 "모달 닫기"를 위한
  const modalBackground = useRef();

  return (
    <ModalOverlay
      ref={modalBackground}
      onClick={(e) => {
        // 백그라운드 클릭시 "모달 닫기"
        if (e.target === modalBackground.current) {
          toggleModal();
        }
      }}
    >
      <ModalContent $width={$width} $height={$height}>
        {children}
      </ModalContent>
    </ModalOverlay>
  );
};

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContent = styled.div`
  background: white;

  display: flex;
  justify-content: center;
  align-items: center;

  border: none;
  border-radius: 15px;

  width: ${(props) => props.$width};
  height: ${(props) => props.$height};

  overflow: hidden;

  padding: 15px;
`;

export default React.memo(Modal);
