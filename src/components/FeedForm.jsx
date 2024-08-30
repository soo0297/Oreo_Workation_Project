import { useState } from 'react';
import supabase from './Supabase';

const FeedForm = ({ toggleModal }) => {
  let formData = {
    author_id: '',
    author_name: '',
    author_profile_url: '',
    id: '',
    date: new Date(),
    title: '',
    content: '',
    img_url: '',
    category_region: '',
    category_tag: ''
  };
  console.log(formData);

  //   const [authorData, setAuthorData] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  // 카테고리 지역 및 태그 선택지
  const regions = ['서울', '경기', '인천', '제주도', '전라도', '경상도(+독도)', '충청도', '강원도'];
  const tags = ['카페', '바', '공유오피스', '기타'];

  async function createPost() {
    const { data } = await supabase.from('feed').insert({
      title: formData.title,
      content: formData.content,
      img_url: formData.img_url,
      category_region: formData.category_region,
      category_tag: formData.category_tag
    });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    createPost();

    // 여기에서 실제로 사용자 정보를 가져오거나 설정하는 로직을 추가해야함
    // 예를 들어, 로그인된 사용자의 정보를 가져와서 설정합니다.
    // setAuthorData({
    //   author_id: 'user123', // 실제로는 로그인된 사용자 정보에서 가져옵니다.
    //   author_name: 'John Doe', // 실제로는 로그인된 사용자 정보에서 가져옵니다.
    //   author_profile_url:
    // });
    setSubmitted(true);
  };

  //   const handleGoHome = () => {
  //     navigate('/');
  //   };

  return (
    <div>
      {!submitted ? (
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="title">제목</label>
            <input
              type="text"
              id="title"
              name="title"
              onChange={(e) => {
                formData.title = e.target.value;
              }}
            />
          </div>

          <div>
            <label htmlFor="category_region">카테고리</label>
            <select
              id="category_region"
              name="category_region"
              onChange={(e) => {
                formData.category_region = e.target.value;
              }}
            >
              <option value="">지역 선택하기</option>
              {regions.map((region) => {
                return (
                  <option key={region} value={region}>
                    {region}
                  </option>
                );
              })}
            </select>
          </div>

          <div>
            <label htmlFor="category_tag">태그</label>
            <select
              id="category_tag"
              name="category_tag"
              onChange={(e) => {
                formData.category_tag = e.target.value;
              }}
            >
              <option value="">장소 선택하기</option>
              {tags.map((tag) => {
                return (
                  <option key={tag} value={tag}>
                    {tag}
                  </option>
                );
              })}
            </select>
          </div>

          <div>
            <label htmlFor="content">내용</label>
            <textarea
              id="content"
              name="content"
              onChange={(e) => {
                formData.content = e.target.value;
              }}
            />
          </div>

          <div>
            {/* <label htmlFor="img_url">사진 추가</label>
            <input
              type="text"
              id="img_url"
              name="img_url"
              onChange={(e) => {
                formData.img_url = e.target.value;
              }}
            /> */}
            <input type="file" accept="image/*" />
          </div>

          <button type="submit">업로드하기</button>
        </form>
      ) : (
        <div>
          <h2>업로드가 성공적으로 되었습니다!</h2>
          <button onClick={toggleModal}>확인</button>
        </div>
      )}
    </div>
  );
};

export default FeedForm;
