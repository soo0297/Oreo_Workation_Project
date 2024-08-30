import styled from 'styled-components';

const Category = () => {
  return (
    <CategoryArea>
      지역
      <button>서울</button>
      <button>경기</button>
      <button>인천</button>
      <button>강원</button>
      <button>제주</button>
      <button>충천</button>
      <button>경상</button>
      <button>전라</button>
    </CategoryArea>
  );
};

const CategoryArea = styled.button`
  border: 1px black solid;
  align-items: baseline;
`;
export default Category;
