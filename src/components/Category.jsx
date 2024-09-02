import { useState } from 'react';
import styled from 'styled-components';

const Category = ({ category, setCategory }) => {
  const [showRegion, setShowRegion] = useState(true);
  const [showTag, setShowTag] = useState(true);

  //카테고리 클릭 이벤트
  const HandleRegionCategory = (e) => {
    const RegionId = e.target.id;
    setCategory({ ...category, RegionId });
  };

  const HandleTagCategory = (e) => {
    const TagId = e.target.id;
    setCategory({ ...category, TagId });
  };
  return (
    <CategoryArea>
      <Category_wrapper>
        <StCheckbox checked={showRegion}>
          <input
            style={{ display: 'none' }}
            type="checkbox"
            onChange={() => {
              setShowRegion(!showRegion);
            }}
          />
          <span>▼</span>
        </StCheckbox>
        지역
      </Category_wrapper>
      <Btn_Wrapper checked={showRegion}>
        <Category_Button id="All" onClick={HandleRegionCategory}>
          전체
        </Category_Button>
        <Category_Button id="서울" onClick={HandleRegionCategory}>
          서울
        </Category_Button>
        <Category_Button id="경기" onClick={HandleRegionCategory}>
          경기
        </Category_Button>
        <Category_Button id="인천" onClick={HandleRegionCategory}>
          인천
        </Category_Button>
        <Category_Button id="강원" onClick={HandleRegionCategory}>
          강원
        </Category_Button>
        <Category_Button id="제주" onClick={HandleRegionCategory}>
          제주
        </Category_Button>
        <Category_Button id="충청" onClick={HandleRegionCategory}>
          충청
        </Category_Button>
        <Category_Button id="경상" onClick={HandleRegionCategory}>
          경상
        </Category_Button>
        <Category_Button id="전라" onClick={HandleRegionCategory}>
          전라
        </Category_Button>
      </Btn_Wrapper>
      <Category_wrapper>
        <StCheckbox checked={showTag}>
          <input
            style={{ display: 'none' }}
            type="checkbox"
            onChange={() => {
              setShowTag(!showTag);
            }}
          />
          <span>▼</span>
        </StCheckbox>
        태그
      </Category_wrapper>

      <Btn_Wrapper checked={showTag}>
        <Category_Button id="All" onClick={HandleTagCategory}>
          전체
        </Category_Button>
        <Category_Button id="카페" onClick={HandleTagCategory}>
          카페
        </Category_Button>
        <Category_Button id="바" onClick={HandleTagCategory}>
          바
        </Category_Button>
        <Category_Button id="공유오피스" onClick={HandleTagCategory}>
          공유오피스
        </Category_Button>
        <Category_Button id="기타" onClick={HandleTagCategory}>
          기타
        </Category_Button>
      </Btn_Wrapper>
    </CategoryArea>
  );
};

const CategoryArea = styled.div`
  height: 600px;
  /* border: 1px black solid; */
  border-radius: 20px;
  padding: 10px;
  position: sticky;
  top: 90px;
  background-color: rgb(124, 255, 211);
`;

const Category_wrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 5px;
`;

const StCheckbox = styled.label`
  display: flex;
  width: 20px;
  height: 20px;
  border-radius: 3px;
  font-size: 15px;
  justify-content: center;
  color: #777;
  transform: ${(props) => (props.checked ? '' : ' rotate(-90deg)')};
  transition: 500ms;
`;

const Btn_Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  padding-left: 10px;
  margin-top: 5px;
  height: ${(props) => (props.checked ? '350px' : '0px')};
  overflow: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
  transition: 600ms;
`;

const Category_Button = styled.button`
  border: none;
  padding: 8px;
  cursor: pointer;
  text-align: left;
  border-radius: 10px;
  &:hover {
    background-color: #ddd;
  }
`;
export default Category;
