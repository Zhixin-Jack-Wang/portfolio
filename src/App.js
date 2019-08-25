import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Main from "./components/layout";
import MyWork from "./components/MyWork";
import About from "./components/About";
import Navbar from "./components/layout/Navbar";
import styled from "styled-components";
function App() {
  return (
    <Router>
      <Navbar />
      <SectionWrapper>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/about" component={About} />
          <Route exact path="/mywork" component={MyWork} />
        </Switch>
      </SectionWrapper>
    </Router>
  );
}

export default App;
const SectionWrapper = styled.section`
  padding: 0rem 2rem;
  margin-top: 5rem;
  @media (min-width: 768px) {
    padding: 0rem 5rem;
  }
`;
