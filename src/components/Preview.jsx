import styled from 'styled-components';
import Carousel from './Carousel';

const Preview = ({ feed }) => {
  console.log(feed);
  return !feed ? (
    ''
  ) : (
    <FeedWrapper>
      <ProfileContainer>
        <ProfileImage src={feed.author_profile_url} alt={feed.author_profile_url} />
        <h4>{feed.author_name}</h4>
      </ProfileContainer>
      <Container>
        <ImgContainer>
          <Carousel images={JSON.parse(feed.img_url)} />
          {/* <FeedImage src={feed.img_url} alt={feed.img_url} /> */}
        </ImgContainer>
        <hr style={{ height: '90%' }} />
        <ContentContainer>
          <Content>
            <Title>{feed.title}</Title>
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
  /* max-height: 410px; */
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

const ContentContainer = styled.div`
  flex: 1;
`;

const Content = styled.div`
  flex: 4;
`;

const Title = styled.h2`
  font-weight: 700;
  font-size: x-large;
  margin-bottom: 20px;
`;
export default Preview;
