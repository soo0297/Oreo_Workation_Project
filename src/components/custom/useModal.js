import { useState } from 'react';

// 모달 커스텀 훅
const useModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return { isModalOpen, toggleModal };
};

export default useModal;
