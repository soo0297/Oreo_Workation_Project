import styled from 'styled-components';

const Preview = () => {
  const MOCK_DATA = {
    author_name: '수영',
    author_profile_url: 'https://health.chosun.com/site/data/img_dir/2022/05/09/2022050901783_0.jpg',
    id: '1',
    date: '2024.08.29',
    title: '테스트 타이틀',
    content:
      '햇살이 창문을 스치며 방 안을 따스하게 물들였다. 고양이는 창가에 앉아 조용히 세상을 바라보았다. 커피 향이 아침 공기와 섞여 기분 좋은 시작을 알렸다.',
    img_url:
      'https://mblogthumb-phinf.pstatic.net/20160115_246/homoscriptus_1452844279900QLQK1_JPEG/DSC03775.JPG?type=w800',
    category_region: '인천',
    category_tag: '카페'
  };

  return (
    <FeedWrapper>
      {/* <button>좋아요</button> */}
      <ProfileContainer>
        <ProfileImage src={MOCK_DATA.author_profile_url} alt={MOCK_DATA.author_profile_url} />
        <h4>{MOCK_DATA.author_name}</h4>
      </ProfileContainer>
      <Container>
        <ImgContainer>
          <FeedImage src={MOCK_DATA.img_url} alt={MOCK_DATA.img_url} />
        </ImgContainer>
        <hr style={{ height: '90%' }} />
        <ContentContainer>
          <Content>
            <h2>{MOCK_DATA.title}</h2>
            <p>{MOCK_DATA.content}</p>
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
