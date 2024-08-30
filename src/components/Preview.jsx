import styled from 'styled-components';

const Preview = ({ feed }) => {
  return !feed ? (
    ''
  ) : (
    <FeedWrapper>
      {/* <button>좋아요</button> */}
      <ProfileContainer>
        <ProfileImage src={feed.author_profile_url} alt={feed.author_profile_url} />
        <h4>{feed.author_name}</h4>
      </ProfileContainer>
      <Container>
        <ImgContainer>
          <FeedImage src={feed.img_url} alt={feed.img_url} />
        </ImgContainer>
        <hr style={{ height: '90%' }} />
        <ContentContainer>
          <Content>
            <h2>{feed.title}</h2>
            <p>{feed.content}</p>
          </Content>
        </ContentContainer>
      </Container>
    </FeedWrapper>
  );
};

const FeedWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;
const Container = styled.div`
  display: flex;
  gap: 30px;
  flex: 1;
  align-items: center;
`;
const ProfileContainer = styled.div`
  display: flex;
  justify-content: right;
  gap: 10px;
  height: auto;
`;
const ProfileImage = styled.img`
  border-radius: 70%;
  width: 50px;
  height: 50px;
`;
const ImgContainer = styled.div`
  flex: 1;
`;

const FeedImage = styled.img`
  display: inline-block;
  max-width: 100%;
  height: auto;
  z-index: 500;
`;
const ContentContainer = styled.div`
  flex: 1;
`;

const Content = styled.div`
  flex: 4;
`;
export default Preview;
