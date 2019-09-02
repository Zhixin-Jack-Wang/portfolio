import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
const Carousel = () => {
  const gallery = [
    "https://picsum.photos/200/300",
    "https://picsum.photos/300/300",
    "https://picsum.photos/400/400",
    "https://picsum.photos/500/500",
    "https://picsum.photos/500/600",
  ];
  const [curr, setCurr] = useState(0);
  const dotHandler = e => {
    e.preventDefault();
    console.log(e.target.innerHTML);
    setCurr(parseInt(e.target.innerHTML));
  };
  const arrowHandler = e => {
    e.preventDefault();
    if (e.target === left.current) {
      if (curr > 0) setCurr(curr - 1);
      else setCurr(gallery.length - 1);
    } else {
      if (curr >= gallery.length - 1) {
        setCurr(0);
      } else setCurr(curr + 1);
    }
  };
  const left = useRef();
  useEffect(()=>{
      console.log(curr+1);
      const interval = setInterval(()=>curr>=gallery.length-1?setCurr(0):setCurr(curr+1),3000);
    
    return ()=>clearInterval(interval);

        
    // setTimeout(()=>curr===gallery.length-1?setCurr(0):setCurr(curr+1),4000);
  },[curr,gallery.length])
  return (
    <DivWrapper pic={gallery[curr]}>
      <div className="img-wrapper">
        <span
          className="control-arrow-prev  control-arrow"
          ref={left}
          onClick={arrowHandler}
        >
          &lt;
        </span>
        <span
          className="control-arrow-next control-arrow"
          onClick={arrowHandler}
        >
          &gt;
        </span>
      </div>
      <div className="control-dot">
        {gallery.map((e, index) => (
          <div className="dot" onClick={dotHandler}>
           {index}
          </div>
        ))}
      </div>
    </DivWrapper>
  );
};

export default Carousel;

const DivWrapper = styled("div")`
  .img-wrapper {
    width: 100%;
    height: 300px;
    position: relative;
    background-image: url(${props => props.pic});
    display: flex;
    align-items: center;
    .control-arrow {
      position: absolute;
      font-size: 72px;
      color: yellow;
      font-weight: bold;
      padding: none;
      margin: none;
      &-prev {
        left: 50px;
        color: red;
      }
      &-next {
        right: 50px;
      }
    }
  }
  .dot {
    height: 1rem;
    width: 1rem;
    background-color: white;
    border-radius: 50%;
    cursor:pointer;
  }
  .control-dot {
    width: 100%;
    display: flex;
    justify-content: space-evenly;
  }
`;
