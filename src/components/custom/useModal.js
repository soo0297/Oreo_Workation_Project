import { useCallback, useState } from 'react';

// 모달 커스텀 훅
const useModal = () => {
  const [isTypeModalOpen, setTypeModalOpen] = useState('');

  const openTypeModal = useCallback(
    (type) => {
      setTypeModalOpen(type);
    },
    [isTypeModalOpen]
  );

  const closeModal = () => {
    setTypeModalOpen('');
  };

  return { isTypeModalOpen, openTypeModal, closeModal };
};

export default useModal;
