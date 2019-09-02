import React, { useState } from "react";
import "../scss/test.scss";
import styled from "styled-components";
import { useTransition, useSpring, animated, useChain } from "react-spring";
import { useRef, useEffect } from "react";
import ResizeObserver from "resize-observer-polyfill";
const Test = props => {
  const ref = useRef();
  const [work, set] = useState(["W", "O", "R", "K"]);

  const [bounds, setBounds] = useState({
    left: 0,
    top: 0,
    width: 0,
    height: 0
  });
  const [ro] = useState(
    () =>
      new ResizeObserver(([entry]) => {
        setBounds(entry.contentRect);
      })
  );
  useEffect(() => {
    console.log(ref.current);
    ro.observe(ref.current);
    console.log(bounds.height);
  });

  const transition = useTransition(work, (e, index) => index, {
    from: { opacity: 0, transform: "translate3d(0,-40px,0)" },
    enter: { opacity: 1, transform: "translate3d(0,0,0)" },
    leave: { opacity: 0, transform: "translate3d(0,-40px,0)" },
    trail: 500
  });
  return (
    <StyledTest primary mg={"1rem"}>
      <div className="test" ref={ref}>
        test test test
      </div>
      <div className="grid">
        {transition.map(({ item, props, key }) => (
          <animated.div style={props} key={key}>
            {item}
          </animated.div>
        ))}
      </div>
    </StyledTest>
  );
};

export default Test;
const StyledTest = styled.section.attrs(props => ({
  mg: props.mg || "5rem"
}))`
  background-color: ${props => (props.primary ? "#E5E5E5" : "black")};
  margin: ${props => props.mg};
  .grid {
    position: relative;
    display: flex;
    width: 1000px;
    justify-content: space-between;
    .smiley {
      font-size: 60px;
    }
  }
`;
