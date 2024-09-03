import styled from 'styled-components';
import useDatabase from '../custom/useDatabase';

const MyFeed = ({ feed, selectedFeedId, isEditedFormOpen, handleClickFeed, updateFeed, deleteFeed }) => {
  let newFeed = {
    id: feed.id,
    title: '',
    content: ''
  };

  const { updateFeedFromDatabase, deleteFeedFromDatabase } = useDatabase();

  return (
    <RootWrapper onClick={() => handleClickFeed(feed.id)}>
      <Wrapper>
        <LeftContainer>
          <LeftItem>
            <span>{feed.title}</span>
            <span>{feed.content}</span>
            <span>{feed.date}</span>
          </LeftItem>
        </LeftContainer>
        <RightContainer>
          <img src={feed.img_url[0]} />
        </RightContainer>
      </Wrapper>
      {isEditedFormOpen && selectedFeedId === feed.id && (
        <EditedForm>
          <input type="text" onClick={(e) => e.stopPropagation()} onChange={(e) => (newFeed.title = e.target.value)} />
          <input
            type="text"
            onClick={(e) => e.stopPropagation()}
            onChange={(e) => (newFeed.content = e.target.value)}
          />
          <button onClick={() => updateFeedFromDatabase(newFeed, () => updateFeed(newFeed))}>수정하기</button>
          <button onClick={() => deleteFeedFromDatabase(newFeed, () => deleteFeed(newFeed))}>삭제하기</button>
        </EditedForm>
      )}
    </RootWrapper>
  );
};

const RootWrapper = styled.div`
  background: red;
  width: 100%;
  height: auto;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Wrapper = styled.div`
  padding: 10px;

  width: 100%;
  height: 150px;

  display: flex;
  justify-content: space-between;

  border: 1px solid black;
`;

const LeftContainer = styled.div`
  background: red;
  width: 70%;
`;

const LeftItem = styled.div`
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const RightContainer = styled.div`
  height: 100%;
  aspect-ratio: 1;

  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 100%;
    height: 100%;

    object-fit: fill;
  }
`;

const EditedForm = styled.div`
  background: green;
  width: 100%;
  height: 150px;

  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-start;

  gap: 10px;
`;

export default MyFeed;
