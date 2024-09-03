import { useState } from 'react';
import styled from 'styled-components';

const Carousel = ({ images }) => {
  //이미지 인덱스
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = (e) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = (e) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  return (
    <Carousel_wrapper>
      <PrevBtn onClick={prevSlide}>◀</PrevBtn>
      <CarouselTrack currentindex={currentIndex}>
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
  transform: ${({ currentindex }) => `translateX(-${currentindex * 100}%)`};
`;

const CarouselSlide = styled.div`
  min-width: 100%;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CarouselImage = styled.img`
  max-height: 450px;
  width: 100%;
  display: block;
`;

const PrevBtn = styled.button`
  left: 3px;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  border: none;
  padding: 10px;
  cursor: pointer;
  z-index: 1;
`;
const NextBtn = styled.button`
  right: 3px;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  border: none;
  padding: 10px;
  cursor: pointer;
  z-index: 1;
`;
export default Carousel;
