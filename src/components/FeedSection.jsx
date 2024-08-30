import styled from 'styled-components';
import useModal from './custom/useModal';
import Preview from './Preview';
import { useState } from 'react';
import Modal from './common/Modal';

const FeedSection = ({ feeds }) => {
  const { isModalOpen, toggleModal } = useModal();
  const [selectedFeed, setSelectedFeed] = useState();

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
                  toggleModal(feed);
                  setSelectedFeed(feed);
                }}
              >
                <h3>{feed.title}</h3>
                <Category_Wrapper>
                  <div>{feed.category_region}</div>
                  <div>{feed.category_tag}</div>
                </Category_Wrapper>
                <img src={feed.img_url} />
                <p>{feed.content}</p>
                <p>{feed.date}</p>
              </Content_Container>
            </Feed>
          );
        })}
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

const Feed = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  padding-bottom: 16px;
  border-bottom: 1px solid #aaa;
`;

const FeedSection_Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const User_Container = styled.div`
  display: flex;
  align-items: center;
  img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
  }
`;

const Content_Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Category_Wrapper = styled.div`
  display: 'flex';
  align-items: 'center';
  gap: '10px';
`;
export default FeedSection;
