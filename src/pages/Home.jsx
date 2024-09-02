import useModal from '../components/custom/useModal';
import { useEffect, useState } from 'react';
import supabase from '../components/Supabase';
import styled from 'styled-components';
import Category from '../components/Category';
import FeedSection from '../components/FeedSection';
import Modal from '../components/common/Modal';
import FeedForm from '../components/FeedForm';
import useAuthStorage from '../components/custom/useAuthStorage';

const Home = () => {
  const [feeds, setFeeds] = useState([]);
  const [category, setCategory] = useState('All');
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const { isModalOpen, toggleModal } = useModal();
  const { getSignInFlag } = useAuthStorage();

  const signInFlag = getSignInFlag();

  const ITEM_PER_PAGE = 5;

  const fetchData = async (page) => {
    setLoading(true);

    let query = supabase
      .from('feed')
      .select('*')
      .range((page - 1) * ITEM_PER_PAGE, page * ITEM_PER_PAGE - 1);

    if (category !== 'All') {
      query = query.eq('category_region', category);
    }

    const { data, error } = await query;
    if (error) {
      console.log('error => ', error);
    } else {
      if (page === 1) {
        setFeeds(data);
      } else {
        setFeeds((prev) => [...prev, ...data]);
      }
      console.log('data => ', feeds);
      setHasMore(data.length > 0);
    }

    setLoading(false);
  };

  useEffect(() => {
    setPage(1);
    setFeeds([]);
    fetchData(1);
  }, [category]);

  useEffect(() => {
    fetchData(page);
  }, [page]);

  return (
    <>
      <Container>
        <Category setCategory={setCategory}>카테고리</Category>
        <FeedSection feeds={feeds} setPage={setPage} loading={loading} hasMore={hasMore} />
        <Follower>팔로우</Follower>
        {signInFlag && <Write_Btn onClick={toggleModal}>작성</Write_Btn>}
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
