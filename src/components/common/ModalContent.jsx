import Modal from './Modal';
import Login from '../Login';
import Register from '../Register';
import FeedForm from '../FeedForm';
import Preview from '../Preview';

const ModalContent = ({ type, closeModal, handleSignIn, handleSignUp, selectedFeed }) => {
  switch (type) {
    case 'login':
      return (
        <Modal closeModal={closeModal} $width="25%" $height="40%">
          <Login closeModal={closeModal} handleSignIn={handleSignIn}></Login>
        </Modal>
      );
    case 'register':
      return (
        <Modal closeModal={closeModal} $width="25%" $height="48%">
          <Register closeModal={closeModal} handleSignUp={handleSignUp}></Register>
        </Modal>
      );
    case 'form':
      return (
        <Modal closeModal={closeModal} $width="40%" $height="60%">
          <FeedForm closeModal={closeModal} />
        </Modal>
      );
    case 'preview':
      return (
        <Modal closeModal={closeModal} $width="70%" $height="70%">
          <Preview feed={selectedFeed} />
        </Modal>
      );
    default:
      return null;
  }
};

export default ModalContent;
