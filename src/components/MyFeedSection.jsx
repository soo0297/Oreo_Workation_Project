import styled from 'styled-components';
import React, { useCallback, useState } from 'react';
import MyFeed from './common/MyFeed';

const MyFeedSection = ({ feeds, updateFeed, deleteFeed }) => {
  const [selectedFeedId, setSelectedFeedId] = useState('');
  const [isEditedFormOpen, toggleEditedFotm] = useState(false);

  const handleClickFeed = useCallback(
    (feedId) => {
      setSelectedFeedId(feedId);
      toggleEditedFotm((prev) => !prev);
    },
    [isEditedFormOpen]
  );

  return (
    <Container>
      {feeds.map((feed) => (
        <MyFeed
          key={feed.id}
          feed={feed}
          selectedFeedId={selectedFeedId}
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
  height: auto;

  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 40px;
`;

export default React.memo(MyFeedSection);
