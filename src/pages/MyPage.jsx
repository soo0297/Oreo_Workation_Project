import { userContext } from '../components/context/User';
import { useEffect, useState } from 'react';
import useDatabase from '../components/custom/useDatabase';
import styled from 'styled-components';
import useSession from '../components/custom/useSession';
import useAuth from '../components/custom/useAuth';
import { useNavigate } from 'react-router-dom';
import MyFeedSection from '../components/MyFeedSection';
import oreo from '../assets/oreo.png';

const MyPage = () => {
  useSession();

  const { userId, nickname, profileUrl } = userContext();
  const { readFeeds } = useDatabase();
  const { handleSignOut } = useAuth();
  const [feeds, setFeeds] = useState([]);
  const navigate = useNavigate();

  const updateFeed = (newFeed) => {
    setFeeds(
      feeds.map((feed) => {
        return newFeed.id === feed.id ? { ...feed, title: newFeed.title, content: newFeed.content } : feed;
      })
    );
  };

  const deleteFeed = (newFeed) => {
    setFeeds(
      feeds.filter((feed) => {
        return newFeed.id !== feed.id;
      })
    );
  };

  useEffect(() => {
    const fetchFeeds = async () => {
      const feeds = await readFeeds(userId);
      setFeeds(feeds);
    };

    if (userId === null) return;

    fetchFeeds();
  }, [userId]);

  if (userId === null) {
    return <div>Loading...</div>;
  }

  return (
    <Wrapper>
      <NavigationBar>
        <div>
          <img src={oreo} />
          <button
            onClick={() =>
              handleSignOut(() => {
                navigate('/');
              })
            }
          >
            로그아웃
          </button>
        </div>
      </NavigationBar>
      <Container>
        <ProfileSection>
          <img src={profileUrl} />
          <span>{nickname}</span>
          <hr></hr>
        </ProfileSection>
        <MyFeedSection feeds={feeds} updateFeed={updateFeed} deleteFeed={deleteFeed}></MyFeedSection>
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  height: auto;

  display: flex;
  justify-content: center;
`;

const NavigationBar = styled.nav`
  position: fixed;
  top: 0;

  background: white;
  width: 100%;
  height: 80px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  display: flex;
  justify-content: center;

  img {
    height: 70%;
    aspect-ratio: 16 / 9;

    object-fit: cover;

    overflow: hidden;
  }

  div {
    width: 80%;
    height: 100%;

    display: flex;
    justify-content: space-between;
    align-items: center;

    button {
      height: 70%;
      aspect-ratio: 16 / 9;

      border: none;
      border-radius: 15px;

      cursor: pointer;
    }
  }
`;

const Container = styled.div`
  margin-top: 120px;
  margin-bottom: 50px;

  width: 60%;
  height: auto;

  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 50px;
`;

const ProfileSection = styled.div`
  width: 100%;
  height: 400px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  gap: 40px;

  img {
    width: 30%;
    aspect-ratio: 1;

    aspect-ratio: cover;

    overflow: hidden;
  }

  span {
    font-size: 25px;
  }

  hr {
    width: 100%;
    border: solid 1px #b9ebff;
  }
`;

export default MyPage;
