import styled from 'styled-components';
import useModal from './custom/useModal';
import Preview from './Preview';
import React, { useEffect, useRef, useState } from 'react';
import Modal from './common/Modal';

const FeedSection = ({ feeds, setPage, loading, hasMore, category }) => {
  const { isModalOpen, toggleModal } = useModal();
  const [selectedFeed, setSelectedFeed] = useState();

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
        <Category_Wrapper>
          <CategoryView>지역: {category.RegionId}</CategoryView>
          <CategoryView>태그: {category.TagId}</CategoryView>
        </Category_Wrapper>
        {feeds.map((feed) => {
          return (
            <Feed key={feed.id}>
              <User_Container>
                <img src={feed.author_profile_url} />
                <p>{feed.author_name}</p>
              </User_Container>
              <Content_Container
                onClick={() => {
                  toggleModal(feed);
                  setSelectedFeed(feed);
                }}
              >
                <h3>{feed.title}</h3>
                <hr />
                <Category_Wrapper>
                  {feed.category_region ? <CategoryView>{feed.category_region}</CategoryView> : ''}
                  {feed.category_tag ? <CategoryView>{feed.category_tag}</CategoryView> : ''}
                </Category_Wrapper>
                <img src={feed.img_url} />
                <p>{feed.content}</p>
                <p>{feed.date}</p>
              </Content_Container>
            </Feed>
          );
        })}
        {loading && <p>Loading...</p>}
        {!hasMore && <p>No more items to load</p>}
        <div ref={observerRef}>{/* 옵저버 구역 */}</div>
      </FeedSection_Wrapper>
      {isModalOpen && (
        <Modal $isOpen={isModalOpen} toggleModal={toggleModal} $width="70%" $height="70%">
          {/* 보여줄 컴포넌트 자리 */}
          <Preview feed={selectedFeed} />
        </Modal>
      )}
    </>
  );
};

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
`;

const Category_Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
  margin: 8px;
`;
export default React.memo(FeedSection);
