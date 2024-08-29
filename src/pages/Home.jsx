import useModal from '../components/custom/useModal';
import Modal from '../components/Modal';

const Home = () => {
    const { isModalOpen, toggleModal } = useModal();

    const style = {
        height: '1500px',
        background: 'red'
    };
    return (
        <div style={style}>
            <button onClick={toggleModal}>모달 열기</button>
            {isModalOpen && (
                <Modal $isOpen={isModalOpen} toggleModal={toggleModal} $width="40%" $height="80%">
                    {/* 보여줄 컴포넌트 자리 */}
                    <div
                        style={{
                            width: '100%',
                            height: '100%',
                            background: 'blue'
                        }}
                    ></div>
                </Modal>
            )}
        </div>
    );
};

export default Home;
