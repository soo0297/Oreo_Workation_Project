import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const FeedForm = () => {
  const [formData, setFormData] = useState({
    id: '',
    date: '',
    title: '',
    content: '',
    img_url: '',
    category_region: '',
    category_tag: ''
  });

  //   const [authorData, setAuthorData] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  // 카테고리 지역 및 태그 선택지
  const regions = ['서울', '경기', '인천', '제주도', '전라도', '경상도(+독도)', '충청도', '강원도'];
  const tags = ['카페', '바', '공유오피스', '기타'];

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // 여기에서 실제로 사용자 정보를 가져오거나 설정하는 로직을 추가해야함
    // 예를 들어, 로그인된 사용자의 정보를 가져와서 설정합니다.
    // setAuthorData({
    //   author_id: 'user123', // 실제로는 로그인된 사용자 정보에서 가져옵니다.
    //   author_name: 'John Doe', // 실제로는 로그인된 사용자 정보에서 가져옵니다.
    //   author_profile_url:
    //     'https://www.google.com/imgres?q=%EC%9D%B8%EB%AC%BC%EC%82%AC%EC%A7%84%20%EC%83%98%ED%94%8C&imgurl=https%3A%2F%2Fthe-edit.co.kr%2Fwp-content%2Fuploads%2F2016%2F12%2Fportrait-mode-4.jpg&imgrefurl=https%3A%2F%2Fthe-edit.co.kr%2F3833&docid=BZMPPK5dhi4j3M&tbnid=Rx1iLryS6JxwPM&vet=12ahUKEwjmyeaqoJyIAxVZZfUHHQIDHsAQM3oECBcQAA..i&w=1000&h=1333&hcb=2&ved=2ahUKEwjmyeaqoJyIAxVZZfUHHQIDHsAQM3oECBcQAA' // 실제로는 로그인된 사용자 정보에서 가져옵니다.
    // });
    setSubmitted(true);
  };

  const handleGoHome = () => {
    navigate('/');
  };

  return (
    <div>
      {!submitted ? (
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="title">제목</label>
            <input type="text" id="title" name="title" value={formData.title} onChange={handleChange} />
          </div>

          <div>
            <label htmlFor="category_region">카테고리</label>
            <select
              id="category_region"
              name="category_region"
              value={formData.category_region}
              onChange={handleChange}
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
            <select id="category_tag" name="category_tag" value={formData.category_tag} onChange={handleChange}>
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
            <textarea id="content" name="content" value={formData.content} onChange={handleChange} />
          </div>

          <div>
            <label htmlFor="img_url">사진 추가</label>
            <input type="text" id="img_url" name="img_url" value={formData.img_url} onChange={handleChange} />
          </div>

          <button type="submit">업로드하기</button>
        </form>
      ) : (
        <div>
          <h2>업로드가 성공적으로 되었습니다!</h2>
          <button onClick={handleGoHome}>메인페이지로!</button>
        </div>
      )}
    </div>
  );
};

export default FeedForm;
