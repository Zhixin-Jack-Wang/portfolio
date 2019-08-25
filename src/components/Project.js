import React from "react";
import { directive } from "@babel/types";
import styled from "styled-components";

const Project = ({ index, title, description, imgArr, github, web }) => {
  console.log("index=" + index);
  return (
    <DivWrapper>
      <h1 className="title">{title}</h1>

      {/*##### Carousel #####*/}
      <div
        id={"carouselExampleIndicators" + index}
        className="carousel slide"
        data-ride="carousel"
      >
        <ol className="carousel-indicators">
          <li
            data-target={"#carouselExampleIndicators" + index}
            data-slide-to="0"
            className="active indicators"
          />
          <li
            className="indicators"
            data-target={"#carouselExampleIndicators" + index}
            data-slide-to="1"
          />
          <li
            className="indicators"
            data-target={"#carouselExampleIndicators" + index}
            data-slide-to="2"
          />
          <li
            className="indicators"
            data-target={"#carouselExampleIndicators" + index}
            data-slide-to="3"
          />
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              className="d-block w-100 imgs"
              src={imgArr[0]}
              alt="First slide"
            />
          </div>
          <div className="carousel-item">
            <img
              className="d-block w-100 imgs"
              src={imgArr[1]}
              alt="Second slide"
            />
          </div>
          <div className="carousel-item">
            <img
              className="d-block w-100 imgs"
              src={imgArr[2]}
              alt="Third slide"
            />
          </div>
          <div className="carousel-item">
            <img
              className="d-block w-100 imgs"
              src={imgArr[3]}
              alt="Forth slide"
            />
          </div>
        </div>
        <a
          className="carousel-control-prev"
          href={"#carouselExampleIndicators" + index}
          role="button"
          data-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="carousel-control-next"
          href={"#carouselExampleIndicators" + index}
          role="button"
          data-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="sr-only">Next</span>
        </a>
      </div>
      <div className="info">
        <p>
          <strong>Description:</strong> {description}
        </p>
        <p>
          <strong>Tools:</strong> MongoDB, Javascript(React.js, Node.js.)
        </p>
      </div>
      <div className="button-group">
        <button className="btn-primary">
          <a className="link" href={github}>
            <i className="fab fa-github" />
            <span> Github</span>
          </a>
        </button>
        <button className="btn-primary">
          <a className="link" href={web}>
            <i className="fas fa-link" />
            <span> Website</span>
          </a>
        </button>
      </div>
    </DivWrapper>
  );
};

export default Project;
const DivWrapper = styled.div`
  position: relative;
  z-index: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: rgba(176, 145, 143, 0.2);
  border: 1px solid black;
  margin-bottom: 3rem;
  @media (min-width: 992px) {
    padding: 0rem 10rem;
  }
  .title {
    color: black;
    font-size: 2rem;
    margin-bottom: 1rem;
    @media (min-width: 992px) {
      font-size: 3rem;
      margin-bottom: 3rem;
    }
  }
  .carousel {
    padding: 0rem 1rem;
    .imgs {
      width: 30rem;
      height: 10rem;
      @media (min-width: 768px) {
        width: 30rem;
        height: 20rem;
      }
      @media (min-width: 992px) {
        width: 40rem;
        height: 40rem;
      }
    }
    .indicators {
    }
    .control-prev {
    }
  }
  .info {
    margin: 1rem;
    @media (min-width: 992px) {
      font-size: 2rem;
    }
  }
  .button-group {
    width: 100%;
    display: flex;
    justify-content: space-around;
    margin-bottom: 1rem;
    @media (min-width: 992px) {
      font-size: 2rem;
      justify-content: space-between;
    }
    .btn-primary {
      border-radius: 10px;
    }
    .link {
      text-decoration: none;
      color: white;
      &:hover {
        color: black;
      }
    }
  }
`;
