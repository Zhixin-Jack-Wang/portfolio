import React, { useState, useRef, useEffect } from "react";
import { useSpring, animated } from "react-spring";
import { Frame, Content, toggle, Line } from "./styles";
import * as Icons from "./icons";
import { useMeasure } from "./helpers";
import { Link } from "react-router-dom";

//?????
function usePrevious(value) {
  const ref = useRef();
  useEffect(() => void (ref.current = value), [value]);
  return ref.current;
}

function Tree({ children, name, icon, open = false, style, link }) {
  const [isOpen, setOpen] = useState(open);
  const previous = usePrevious(isOpen);
  const [bind, { height: viewHeight }] = useMeasure();
  const { height, opacity, transform } = useSpring({
    from: { height: 0, opacity: 0, transform: "translate3d(20px,0,0)" },
    to: {
      height: isOpen ? viewHeight : 0,
      opacity: isOpen ? 1 : 0,
      transform: `translate3d(${isOpen ? 0 : 20}px,0,0)`
    }
  });
  // const Icon =
  //   Icons[`${children ? (isOpen ? "Minus" : "Plus") : "Close"}SquareO`];
  const Icon = Icons[children ? (isOpen ? "Open" : "Close") : "None"];
  const IconTitle = Icons[icon];
  return (
    <Frame>
      <Line>
        <Icon
          style={{ ...toggle, opacity: children ? 1 : 0.3 }}
          onClick={() => setOpen(!isOpen)}
        />
        <IconTitle style={{ ...toggle }} onClick={() => setOpen(!isOpen)} />
        <Link
          to={`/${link}`}
          style={{ ...style, cursor: "pointer" ,verticalAlign: "middle" ,  textDecoration: 'inherit',
          color: 'inherit'
       }}
          onClick={() => setOpen(!isOpen)}
        >
          {name}
        </Link>
      </Line>

      <Content
        style={{
          opacity,
          height: isOpen && previous === isOpen ? "auto" : height
        }}
      >
        <animated.div style={{ transform }} {...bind}>
          {children}
        </animated.div>
      </Content>
    </Frame>
  );
}

export default function App() {
  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        height: "100%",
        overflowY: "auto",
        boxSizing: "border-box",
        padding: 20
      }}
    >
      <Tree name="My Portfolio" icon="Portfolio" open>
        <Tree name="My Work" icon="Work">
          <Tree name="Chrysopoeia" icon="App" link="mywork/chrysopoeia" />
          <Tree name="Stickyboard" icon="App" />
        </Tree>
        <Tree name="Welcome" icon="Welcome" link=""/>
        <Tree name="About" icon="About" link="about"/>
        <Tree name="Contact" icon="Contact" />
      </Tree>
    </div>
  );
}
