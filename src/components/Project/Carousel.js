import React, { useState, useRef, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import Swipe from "react-easy-swipe";
import { Dot } from "./svg";
import slide1 from './img/slide1.PNG'
import slide2 from './img/slide2.PNG'
import slide3 from './img/slide3.PNG'
import slide4 from './img/slide4.PNG'
const Carousel = () => {
  const gallery = [
    slide1,
    slide2,
    slide3,
    slide4,
  ];
  const [curr, setCurr] = useState(0);

  //click dot
  const dotHandler = index => {
    setCurr(index);
  };

  //click arrow
  const arrowHandler = e => {
    e.preventDefault();
    if (e.target === left.current) prevPic();
    else nextPic();
  };

  //swipe on phone
  const onSwipeLeft = event => {
    nextPic();
  };
  const onSwipeRight = event => {
    prevPic();
  };

  //select picture
  const nextPic = () =>{
    curr >= gallery.length - 1 ? setCurr(0) : setCurr(curr + 1);
  }
  const prevPic = () =>{
    curr <= 0 ? setCurr(gallery.length - 1) : setCurr(curr - 1);
  }

  //ref
  const left = useRef();

  //auto scroll
  useEffect(() => {
    const interval = setInterval(nextPic, 3000);
    return () => clearInterval(interval);
  }, [curr, gallery.length]);
  console.log('rendered');

  //return
  return (
    <DivWrapper pic={gallery[curr]}>
      <Swipe onSwipeLeft={onSwipeLeft} onSwipeRight={onSwipeRight}>
        <div className="gallery">
          <div
            className="control-arrow-prev  control-arrow"
            ref={left}
            onClick={arrowHandler}
          >
            &lt;
          </div>
          <div
            className="control-arrow-next control-arrow"
            onClick={arrowHandler}
          >
            &gt;
          </div>
        </div>
      </Swipe>
      <div className="control-dot">
        {gallery.map((e, index) => (
          <Dot key={index} index={index} click={dotHandler} opacity={index===curr?1:0.5} />
        ))}
      </div>
      <div></div>
    </DivWrapper>
  );
};

export default Carousel;

const dot = keyframes`
    0%{
        transform: scale(1);
    }
    100%{
        transform: scale(1.5);
    }
`;
const DivWrapper = styled("div")`
  .gallery {
    width: 100%;
    height: 50vh;
    display: flex;
    position: relative;
    align-items: center;
    background-image: url(${props => props.pic});
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
    .control-arrow {
      width:3rem;
      height:3rem;
      position: absolute;
      display:flex;
      padding: none;
      margin: none;
      align-items:center;
      justify-content:center;
      border-radius:50%;
      background-color: white;
      color: black;
      opacity:0.4;
      font-size: 3rem;
      font-weight: bold;
      cursor: pointer;
      user-select:none;
      &:hover{
        opacity:1;
     }
      &-prev {
        left: 30px;
      }
      &-next {
        right: 30px;
      }
    }
  }
  .control-dot {
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    margin-top:1rem;
    .dot {
      cursor: pointer;
      /* opacity: 0.5; */
      &:hover {
        animation: ${dot} 0.5s ease-in-out alternate infinite;
      }
      &:active {
        opacity: 1;
      }
    }
  }
`;
