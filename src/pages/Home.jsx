import useModal from '../components/custom/useModal';
import { useEffect, useState } from 'react';
import supabase from '../components/Supabase';
import styled from 'styled-components';
import Category from '../components/Category';
import FeedSection from '../components/FeedSection';
import Modal from '../components/common/Modal';
import FeedForm from '../components/FeedForm';

const Home = () => {
  const [feeds, setFeeds] = useState([]);
  const [filterFeed, setFilterFeed] = useState([]);
  const { isModalOpen, toggleModal } = useModal();

  useEffect(() => {
    const fetchData = async () => {
      const { data, error } = await supabase.from('feed').select('*');
      if (error) {
        console.log('error => ', error);
      } else {
        console.log('data => ', data);
        setFeeds(data);
        setFilterFeed(data);
      }
    };

    fetchData();
  }, []);

  console.log(filterFeed);

  return (
    <>
      <Container>
        <Category feeds={feeds} setFilterFeed={setFilterFeed}>
          카테고리
        </Category>
        <FeedSection feeds={filterFeed} />
        <Follower>팔로우</Follower>
        <Write_Btn onClick={toggleModal}>작성</Write_Btn>
      </Container>
      {isModalOpen && (
        <Modal $isOpen={isModalOpen} toggleModal={toggleModal} $width="40%" $height="80%">
          {/* 보여줄 컴포넌트 자리 */}
          <FeedForm setFeeds={setFeeds} toggleModal={toggleModal} />
        </Modal>
      )}
    </>
  );
};

const Container = styled.div`
  width: auto;
  height: auto;
  margin: auto;
  display: grid;
  grid-template-columns: 2.5fr 7fr 3fr;
  width: 1250px;
  justify-content: center;
  position: relative;
  column-gap: 60px;
  padding: 8px 16px;
`;

const Follower = styled.div`
  border: 1px black solid;
`;

const Write_Btn = styled.button`
  width: 50px;
  height: 50px;
  border-radius: 25%;
  position: fixed;
  bottom: 20px;
  right: 20px;
`;

export default Home;
