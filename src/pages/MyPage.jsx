import { useEffect, useState } from 'react';
import styled from 'styled-components';
import supabase from '../components/Supabase';

const Container = styled.div`
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;
`;

const ProfileSection = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const ProfileImage = styled.img`
  border-radius: 50%;
  width: 150px;
  height: 150px;
  margin-right: 20px;
`;

const ProfileName = styled.p`
  font-size: 24px;
  font-weight: bold;
`;

const Divider = styled.hr`
  margin: 20px 0;
  border: 1px solid #ddd;
`;

const FeedsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`;

const FeedCard = styled.div`
  position: relative;
  border: 1px solid #ddd;
  padding: 10px;
  border-radius: 8px;
  width: 300px; // 카드의 너비를 넓게 설정
  cursor: pointer;
  transition: box-shadow 0.3s;

  &:hover {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }

  &:hover .edit-delete-buttons {
    display: flex;
  }
`;

const FeedImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 8px;
`;

const FeedTitle = styled.h3`
  margin: 10px 0;
`;

const ContentPreview = styled.p`
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  height: 3em;
`;

const EditDeleteButtons = styled.div`
  display: none;
  position: absolute;
  bottom: 10px; // 하단으로 이동
  left: 10px;
  gap: 10px;

  button {
    padding: 8px 12px;
    border-radius: 4px;
    border: none;
    cursor: pointer;
    background-color: #007bff;
    color: white;
    font-weight: bold;
    transition: background-color 0.3s;

    &:hover {
      background-color: #0056b3;
    }
  }
`;

const EditingSection = styled.div`
  margin-top: 20px;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
`;

const InputField = styled.input`
  width: 100%;
  padding: 8px;
  margin: 10px 0;
  border: 1px solid #ddd;
  border-radius: 4px;
`;

const TextareaField = styled.textarea`
  width: 100%;
  padding: 8px;
  margin: 10px 0;
  border: 1px solid #ddd;
  border-radius: 4px;
  resize: none; // 크기 조정 불가능하게 설정
`;

const Button = styled.button`
  padding: 10px 16px;
  margin: 5px;
  border-radius: 4px;
  border: none;
  cursor: pointer;
  background-color: #28a745;
  color: white;
  font-weight: bold;
  transition: background-color 0.3s;

  &:hover {
    background-color: #218838;
  }
`;

const MyPage = () => {
  const [profile, setProfile] = useState({
    author_name: '',
    author_profile_url: ''
  });
  const [newName, setNewName] = useState('');
  const [feeds, setFeeds] = useState([]);
  const [editingPost, setEditingPost] = useState(null);
  const [updatedTitle, setUpdatedTitle] = useState('');
  const [updatedContent, setUpdatedContent] = useState('');

  useEffect(() => {
    const fetchProfile = async () => {
      const userId = 1;
      const { data, error } = await supabase
        .from('feed')
        .select('author_name, author_profile_url')
        .eq('id', userId)
        .single();

      if (error) {
        console.error('Error fetching profile:', error);
      } else {
        setProfile({
          author_name: data.author_name,
          author_profile_url: data.author_profile_url
        });
      }
    };

    const fetchFeeds = async () => {
      const { data, error } = await supabase
        .from('feed')
        .select('id, title, img_url, content')
        .eq('author_name', profile.author_name);

      if (error) {
        console.error('Error fetching feeds:', error);
      } else {
        setFeeds(data);
      }
    };

    fetchProfile();
    fetchFeeds();
  }, [profile.author_name]);

  const handleNameChange = async () => {
    const userId = 1;
    const { data, error } = await supabase.from('feed').update({ author_name: newName }).eq('id', userId);

    if (error) {
      console.error('Error updating name:', error);
    } else {
      setProfile((prevProfile) => ({
        ...prevProfile,
        author_name: newName
      }));
      setNewName('');
    }
  };

  const handlePostEdit = (post) => {
    setEditingPost(post);
    setUpdatedTitle(post.title);
    setUpdatedContent(post.content || '');
  };

  const handleSavePost = async () => {
    const { data, error } = await supabase
      .from('feed')
      .update({ title: updatedTitle, content: updatedContent })
      .eq('id', editingPost.id);

    if (error) {
      console.error('Error updating post:', error);
    } else {
      setFeeds(
        feeds.map((feed) =>
          feed.id === editingPost.id ? { ...feed, title: updatedTitle, content: updatedContent } : feed
        )
      );
      setEditingPost(null);
    }
  };

  const handlePostDelete = async (postId) => {
    const { error } = await supabase.from('feed').delete().eq('id', postId);

    if (error) {
      console.error('Error deleting post:', error);
    } else {
      setFeeds(feeds.filter((feed) => feed.id !== postId));
    }
  };

  return (
    <Container>
      <h1>마이 페이지</h1>
      <ProfileSection>
        <ProfileImage src={profile.author_profile_url} alt={profile.author_name} />
        <div>
          <ProfileName>이름: {profile.author_name}</ProfileName>
          {newName === '' ? (
            <Button onClick={() => setNewName(profile.author_name)}>이름 변경</Button>
          ) : (
            <div>
              <InputField
                type="text"
                value={newName}
                onChange={(e) => setNewName(e.target.value)}
                placeholder="변경할 이름 입력"
              />
              <Button onClick={handleNameChange}>저장</Button>
              <Button onClick={() => setNewName('')}>취소</Button>
            </div>
          )}
        </div>
      </ProfileSection>
      <Divider />
      <h2>내 게시물</h2>
      {feeds.length > 0 ? (
        <FeedsContainer>
          {feeds.map((feed) => (
            <FeedCard key={feed.id}>
              <FeedTitle>{feed.title}</FeedTitle>
              <FeedImage src={feed.img_url} alt={feed.title} />
              <ContentPreview>{feed.content}</ContentPreview>
              <EditDeleteButtons className="edit-delete-buttons">
                <Button onClick={() => handlePostEdit(feed)}>수정</Button>
                <Button onClick={() => handlePostDelete(feed.id)}>삭제</Button>
              </EditDeleteButtons>
            </FeedCard>
          ))}
        </FeedsContainer>
      ) : (
        <p>게시물이 없습니다.</p>
      )}
      {editingPost && (
        <EditingSection>
          <h3>게시물 수정</h3>
          <InputField
            type="text"
            value={updatedTitle}
            onChange={(e) => setUpdatedTitle(e.target.value)}
            placeholder="제목"
          />
          <TextareaField
            value={updatedContent}
            onChange={(e) => setUpdatedContent(e.target.value)}
            placeholder="내용"
          />
          <Button onClick={handleSavePost}>저장</Button>
          <Button onClick={() => setEditingPost(null)}>취소</Button>
        </EditingSection>
      )}
    </Container>
  );
};

export default MyPage;
