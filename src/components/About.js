import React from "react";
import styled from "styled-components";
const About = () => {
  return (
    <DivWrapper>
      <h1 className="title">Who am I?</h1>
      <p className="intro">
        Enthusiastic developer ready to be part of Toronto’s rapidly growing
        tech ecosystem. Excited to be an active contributor to the constantly
        evolving and innovating tech scene.{" "}
      </p>
      <p className="intro">
        Strong believer of lifelong learning: not just there to do a job, but to
        grow with the company, to incorporate the latest technology and solution
        to increase the market value and general competitiveness of the company.
      </p>
    </DivWrapper>
  );
};

export default About;
const DivWrapper = styled.div`
  .title {
    font-size: 2rem;
    margin-bottom: 2rem;
    @media (min-width: 992px) {
      font-size: 5rem;
      margin-bottom: 4rem;
    }
  }
  @media (min-width: 992px) {
    .intro {
      font-size: 2rem;
    }
  }
`;
