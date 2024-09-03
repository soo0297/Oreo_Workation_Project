import { useEffect, useState } from 'react';
import supabase from '../components/Supabase';
import styled from 'styled-components';
import Category from '../components/Category';
import FeedSection from '../components/FeedSection';
import Following from '../components/Following';
import ModalContent from '../components/common/ModalContent';
import useModal from '../components/custom/useModal';
import { userContext } from '../components/context/User';
import writeIcon from '../img/sign-up-icon.png';
import intro_bg from '../img/intro_bg.png';

const Home = () => {
  const [feeds, setFeeds] = useState([]);
  const [category, setCategory] = useState({ RegionId: 'All', TagId: 'All' });
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const { isTypeModalOpen, openTypeModal, closeModal } = useModal();
  const { isSignedIn } = userContext();

  const ITEM_PER_PAGE = 5;

  const fetchData = async (page) => {
    setLoading(true);

    let query = supabase
      .from('feed')
      .select('*')
      .order('date', { ascending: false })
      .order('id', { ascending: false })
      .range((page - 1) * ITEM_PER_PAGE, page * ITEM_PER_PAGE - 1);

    if (category.RegionId !== 'All') {
      query = query.eq('category_region', category.RegionId);
    }

    if (category.TagId !== 'All') {
      query = query.eq('category_tag', category.TagId);
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
      <IntroBg>
        <StTitle>
          <div>Work away from work</div>
          <div>Work + Vacation</div>
          <TitleBtn>Explore</TitleBtn>
        </StTitle>
      </IntroBg>
      <Container>
        <Category category={category} setCategory={setCategory}>
          카테고리
        </Category>
        <FeedSection feeds={feeds} setPage={setPage} loading={loading} hasMore={hasMore} category={category} />
        {/* <Following /> */}
        {isSignedIn && (
          <Write_Btn onClick={() => openTypeModal('form')}>
            <img style={{ width: '30px', height: '30px' }} src={writeIcon} />
          </Write_Btn>
        )}
      </Container>
      {isTypeModalOpen && <ModalContent type={isTypeModalOpen} closeModal={closeModal} />}
    </>
  );
};

const TitleBtn = styled.button`
  width: 200px;
  height: 50px;
  background-color: transparent;
  color: white;
  border: 2px solid white;
  border-radius: 8px;
  font-weight: 600;
  font-size: 20px;
  &:hover {
    background-color: rgb(0, 0, 0, 0.5);
  }
`;

const StTitle = styled.div`
  font-size: 60px;
  font-weight: 600;
  justify-content: center;
  text-align: center;
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const IntroBg = styled.div`
  width: 100%;
  height: 800px;
  background-image: url(${intro_bg});
  background-size: 100%;
  background-position: top;
  background-repeat: no-repeat;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  isolation: isolate;

  &::after {
    content: '';
    position: absolute;
    background: black;
    z-index: -1;
    inset: 0;
    opacity: 0.4;
  }
  /* background-color: rgb(0, 0, 0); */
`;

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

const Write_Btn = styled.button`
  width: 50px;
  height: 50px;
  border-radius: 25%;
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 1;
`;

export default Home;
