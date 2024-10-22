import styled from 'styled-components';
import useModal from './custom/useModal';
import React, { useEffect, useRef, useState, useCallback } from 'react';
import ModalContent from './common/ModalContent';
import Carousel from './Carousel';

const FeedSection = ({ feeds, setPage, loading, hasMore }) => {
  const { isTypeModalOpen, openTypeModal, closeModal } = useModal();
  const [selectedFeed, setSelectedFeed] = useState(null);

  const handleFeedClick = useCallback(
    (feed) => {
      setSelectedFeed(feed);
      openTypeModal('preview');
    },
    [openTypeModal]
  );

  //무한스크롤 시작
  const observerRef = useRef();
  useEffect(() => {
    if (loading) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && hasMore) {
          setPage((prev) => prev + 1);
        }
      },
      { threshold: 1.0 }
    );
    if (observerRef.current) {
      observer.observe(observerRef.current);
    }
    return () => {
      if (observerRef.current) {
        observer.unobserve(observerRef.current);
      }
    };
  }, [loading, hasMore]);

  //무한스크롤 끝

  return (
    <>
      <FeedSection_Wrapper>
        {feeds.map((feed) => {
          return (
            <Feed key={feed.id}>
              <User_Container>
                <img src={feed.author_profile_url} />
                <p>{feed.author_name}</p>
              </User_Container>
              <Content_Container
                onClick={() => {
                  handleFeedClick(feed);
                }}
              >
                <Category_Wrapper>
                  {feed.category_region ? <CategoryView>{feed.category_region}</CategoryView> : ''}
                  {feed.category_tag ? <CategoryView>{feed.category_tag}</CategoryView> : ''}
                </Category_Wrapper>
                <Carousel images={JSON.parse(feed.img_url)} />
                <StTitle>{feed.title}</StTitle>
                <Content_text>{feed.content}</Content_text>
                <p>{feed.date}</p>
              </Content_Container>
            </Feed>
          );
        })}
        {loading && <p>Loading...</p>}
        {!hasMore && <p>No more items to load</p>}
        <div ref={observerRef}>{/* 옵저버 구역 */}</div>
      </FeedSection_Wrapper>
      {isTypeModalOpen && <ModalContent type={isTypeModalOpen} closeModal={closeModal} selectedFeed={selectedFeed} />}
    </>
  );
};

const StTitle = styled.h3`
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 12px;
`;

const Content_text = styled.div`
  white-space: pre-line;
  font-size: 17px;
  line-height: 1.7;
`;

const CategoryView = styled.div`
  padding: 5px;
  height: 20px;
  border-radius: 5px;
  font-size: 14px;
  text-align: center;
  background-color: #ddd;
`;

const Feed = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  padding-bottom: 16px;
  border-bottom: 1px solid #aaa;
  padding: 10px;
  background-color: #b9ebff;
  border-radius: 20px;
  gap: 5px;
`;

const FeedSection_Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const User_Container = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
  }
`;

const Content_Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #eee;
  padding: 10px;
  border-radius: 20px;
  cursor: pointer;
  gap: 5px;
`;

const Category_Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
  margin: 8px;
`;
export default React.memo(FeedSection);
