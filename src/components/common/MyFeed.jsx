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
          <EditedFormWrapper>
            <input
              type="text"
              placeholder={feed.title}
              onClick={(e) => e.stopPropagation()}
              onChange={(e) => (newFeed.title = e.target.value)}
            />
            <input
              type="text"
              placeholder={feed.content}
              onClick={(e) => e.stopPropagation()}
              onChange={(e) => (newFeed.content = e.target.value)}
            />

            <EditedFormBtnWrapper>
              <button onClick={() => updateFeedFromDatabase(newFeed, () => updateFeed(newFeed))}>수정하기</button>
              <button onClick={() => deleteFeedFromDatabase(newFeed, () => deleteFeed(newFeed))}>삭제하기</button>
            </EditedFormBtnWrapper>
          </EditedFormWrapper>
        </EditedForm>
      )}
    </RootWrapper>
  );
};

const RootWrapper = styled.div`
  width: 100%;
  height: auto;

  padding: 15px 10px 40px 10px;

  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 20px;

  border-bottom: solid 2px gray;

  cursor: pointer;
`;

const Wrapper = styled.div`
  width: 100%;
  height: 150px;

  display: flex;
  justify-content: space-between;

  border: none;
  border-radius: 20px;
`;

const LeftContainer = styled.div`
  width: 70%;
`;

const LeftItem = styled.div`
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: space-around;

  :nth-child(1) {
    font-size: 20px;
    font-weight: bold;
  }

  :last-child {
    font-size: 14px;
    color: gray;
  }
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

    border-radius: 20px;
  }
`;

const EditedForm = styled.div`
  width: 100%;
  height: 150px;

  display: flex;
  justify-content: center;
  align-items: center;

  gap: 10px;

  border: solid 2px #b9ebff;

  cursor: default;
`;

const EditedFormWrapper = styled.div`
  width: 90%;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  input {
    width: 100%;
  }
`;

const EditedFormBtnWrapper = styled.div`
  width: auto;
  height: auto;

  display: flex;
  justify-content: center;
  align-items: center;

  gap: 20px;

  button {
    padding: 10px 15px;

    border: none;
    border-radius: 10px;

    cursor: pointer;
  }

  :nth-child(1) {
    background: #b9ebff;
    color: black;
  }
`;

export default MyFeed;
