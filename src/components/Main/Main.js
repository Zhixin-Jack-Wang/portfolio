import React, { useContext } from "react";
import { Route, Switch, __RouterContext } from "react-router-dom";
import Menu from "../Menu/Menu";
import About from "../About/About";
import Welcome from "../Welcome/Welcome";
import Project from "../Project/Project";

import { useTransition, animated } from "react-spring";
import "./main.scss";

const Main = () => {
  const { location } = useContext(__RouterContext);
  const transitions = useTransition(location, location => location.pathname, {
    from: { opacity: 0, transform: "translate3d(100%,0,0)" },
    enter: { opacity: 1, transform: "translate3d(0%,0,0)" },
    leave: { opacity: 0, transform: "translate3d(-50%,0,0)" }
  });
  return (
    <>
      <div className="status-bar"></div>
      <div className="menu">
        <Menu />
      </div>
      <div className="content">
        {transitions.map(({ item, key, props }) => (
          <animated.div key={key} style={props}>
            <Switch location={item}>
              <Route exact path="/" component={Welcome}/>
              <Route exact path="/about" component={About}/>
              <Route exact path="/mywork/chrysopoeia" component={Project}/>
            </Switch>
          </animated.div>
        ))}
      </div>
    </>
  );
};

export default Main;
