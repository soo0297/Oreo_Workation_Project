import styled from 'styled-components';
import React, { useRef, useState } from 'react';
import MyFeed from './common/MyFeed';

const MyFeedSection = ({ feeds, updateFeed, deleteFeed }) => {
  const [isEditedFormOpen, toggleEditedFotm] = useState(false);
  const selectedFeedId = useRef(null);

  const handleClickFeed = (feedId) => {
    selectedFeedId.current = feedId;
    toggleEditedFotm((prev) => !prev);
  };

  return (
    <Container>
      {feeds.map((feed) => (
        <MyFeed
          key={feed.id}
          feed={feed}
          selectedFeedId={selectedFeedId.current}
          isEditedFormOpen={isEditedFormOpen}
          handleClickFeed={handleClickFeed}
          updateFeed={updateFeed}
          deleteFeed={deleteFeed}
        />
      ))}
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 800px;

  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 20px;
`;

export default React.memo(MyFeedSection);
