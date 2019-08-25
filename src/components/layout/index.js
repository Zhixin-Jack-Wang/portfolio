import React from "react";
import Navbar from "./Navbar";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Main = () => {
  return (
    <DivWrapper>
      <h1 className="name">Zhixin Wang</h1>
      <h2 className="title">Web Developer</h2>
      <p className="grating">Welcome, thank you for visiting my site.</p>
      <div className="cta-wrapper">
        <Link to="/mywork" className="link">
          <button className="cta btn-primary">My Work</button>
        </Link>
      </div>
    </DivWrapper>
  );
};

export default Main;
const DivWrapper = styled.div`
  .name {
    color: yellow;
  }
  .title {
    margin-left: 5rem;
  }
  .grating {
    font-size: 1.5rem;
    margin-top: 5rem;
    @media (min-width: 768px) {
      margin-left: 5rem;
    }
  }
  .cta-wrapper {
    display: flex;
    justify-content: flex-end;
    .cta {
      margin-top: 2rem;
      height: 4rem;
      width: 10rem;
      font-size: 1.5rem;
      border-radius: 10px;
      &:hover {
        color: black;
      }

      .link {
        text-decoration: none;
        color: white;
      }
    }
  }
`;
