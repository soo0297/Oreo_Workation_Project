import { useState } from 'react';
import styled from 'styled-components';
//예시 이미지 파일
import t1 from '../img/t1.jpg';
import t2 from '../img/t2.png';
import t3 from '../img/t3.jpg';

const Carousel = () => {
  //이미지 목데이터
  const images = [t1, t2, t3];
  //이미지 인덱스
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  return (
    <Carousel_wrapper>
      <PrevBtn onClick={prevSlide}>◀</PrevBtn>
      <CarouselTrack currentIndex={currentIndex}>
        {images.map((img, index) => {
          return (
            <CarouselSlide key={index}>
              <CarouselImage src={img} />
            </CarouselSlide>
          );
        })}
      </CarouselTrack>
      <NextBtn onClick={nextSlide}>▶</NextBtn>
    </Carousel_wrapper>
  );
};

const Carousel_wrapper = styled.div`
  position: relative;
  width: 100%;
  max-width: 600px;
  margin: auto;
  overflow: hidden;
`;

const CarouselTrack = styled.div`
  display: flex;
  transition: transform 0.5s;
  transform: ${({ currentIndex }) => `translateX(-${currentIndex * 100}%)`};
`;

const CarouselSlide = styled.div`
  min-width: 100%;
  box-sizing: border-box;
`;

const CarouselImage = styled.img`
  width: 100%;
  display: block;
`;

const PrevBtn = styled.button`
  left: 10px;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  border: none;
  padding: 10px;
  cursor: pointer;
  z-index: 10;
`;
const NextBtn = styled.button`
  right: 10px;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  border: none;
  padding: 10px;
  cursor: pointer;
  z-index: 10;
`;
export default Carousel;
