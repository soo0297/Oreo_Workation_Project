import styled from 'styled-components';

const Category = ({ feeds, setFilterFeed }) => {
  //카테고리 클릭 이벤트
  const CategoryHandler = (e) => {
    const id = e.target.id;

    if (id === 'All') {
      setFilterFeed(feeds);
    } else {
      setFilterFeed(
        feeds.filter((feed) => {
          return feed.category_region === id;
        })
      );
    }
  };
  return (
    <CategoryArea>
      지역
      <Btn_Wrapper>
        <Category_Button id="All" onClick={CategoryHandler}>
          전체
        </Category_Button>
        <Category_Button id="서울" onClick={CategoryHandler}>
          서울
        </Category_Button>
        <Category_Button id="경기" onClick={CategoryHandler}>
          경기
        </Category_Button>
        <Category_Button id="인천" onClick={CategoryHandler}>
          인천
        </Category_Button>
        <Category_Button id="강원" onClick={CategoryHandler}>
          강원
        </Category_Button>
        <Category_Button id="제주" onClick={CategoryHandler}>
          제주
        </Category_Button>
        <Category_Button id="충청" onClick={CategoryHandler}>
          충청
        </Category_Button>
        <Category_Button id="경상" onClick={CategoryHandler}>
          경상
        </Category_Button>
        <Category_Button id="전라" onClick={CategoryHandler}>
          전라
        </Category_Button>
      </Btn_Wrapper>
    </CategoryArea>
  );
};

const CategoryArea = styled.div`
  border: 1px black solid;
  align-items: baseline;
  padding: 10px;
`;

const Btn_Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
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
