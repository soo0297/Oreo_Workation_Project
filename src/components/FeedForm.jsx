import { useState } from 'react';
import supabase from './Supabase';
import { userContext } from './context/User';

const FeedForm = ({ closeModal }) => {
  const user = userContext();
  console.log(user);

  let formData = {
    author_id: '',
    author_name: '',
    author_profile_url: '',
    id: '',
    date: new Date(),
    title: '',
    content: '',
    img_url: [],
    category_region: '',
    category_tag: ''
  };
  console.log(formData);

  const [submitted, setSubmitted] = useState(false);

  // 카테고리 지역 및 태그 선택지
  const regions = ['서울', '경기', '인천', '제주', '전라', '경상', '충청', '강원'];
  const tags = ['카페', '바', '공유오피스', '기타'];

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    formData = { ...formData, img_url: files };
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { title, content, img_url, category_region, category_tag } = formData;

    // 이미지 파일명 랜덤으로 만들기 로직(중복된 파일선택 가능하게)
    // 날짜를 'YYYYMMDD'로 변환 , 시간을 'HHMMSS'로 변환 , 4자리 난수 생성
    // imgID = 날짜, 시간, 난수 결합하여 최종 문자열 생성
    let photoUrl = [];
    for (let imgFile of img_url) {
      const now = new Date();
      const datePart = now.toISOString().slice(0, 10).replace(/-/g, '');
      const timePart = now.toTimeString().slice(0, 8).replace(/:/g, '');
      const randomFourDigit = Math.floor(1000 + Math.random() * 9000);
      const imgID = `${datePart}${timePart}${randomFourDigit}`;

      const { data, error } = await supabase.storage.from('photos').upload(`public/${imgID}`, imgFile);
      if (data && !error) {
        const publicUrl = `${supabase.storage.from('photos').getPublicUrl(`public/${imgID}`).data.publicUrl}`;
        console.log(publicUrl);

        photoUrl.push(publicUrl);
      } else {
        console.error('Error upload', error);
      }
    }

    const { error: feedError } = await supabase.from('feed').insert({
      title,
      content,
      img_url: photoUrl,
      category_region,
      category_tag,
      author_name: user.nickname,
      author_profile_url: user.profileUrl,
      date: `${new Date().toISOString().slice(0, 10)}` + ` ${new Date().toTimeString().slice(0, 8)}`
    });

    if (feedError) {
      console.error('Error insert', feedError);
    }

    setSubmitted(true);
  };

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
            <input type="file" accept="image/*" multiple onChange={handleImageChange} />
          </div>

          <button type="submit">업로드하기</button>
        </form>
      ) : (
        <div>
          <h2>업로드가 성공적으로 되었습니다!</h2>
          <button type="button" onClick={closeModal}>
            확인
          </button>
        </div>
      )}
    </div>
  );
};

export default FeedForm;
