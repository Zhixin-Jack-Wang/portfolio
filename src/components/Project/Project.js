import React from "react";
import Carousel from "./Carousel";
import { DivWrapper, Description } from "./style";
import f1 from './img/feature/f1.PNG'
import f2 from './img/feature/f2.PNG'
import f3 from './img/feature/f3.PNG'
import f4 from './img/feature/f4.PNG'
const Project = () => {
  return (
    <>
      <DivWrapper>
        <div className="project-header">
          <h1 className="project-title">Chrysopoeia</h1>
          <div className="project-link">
            <button className="project-link-btn btn-git">github</button>
            <button className="project-link-btn">website</button>
          </div>
        </div>
        <div className="carousel">
          <Carousel />
        </div>
      </DivWrapper>
      <Description>
        <div className="summary">
          <h2>Summary</h2>
          <p>
            Chrysopoeia is a trading platform for people to exchange and sell
            pre-owned or used products. What makes Chrysopoeia standout among
            similar platforms is that it provides a more straight-forward
            service and an user-friendly UI to speed up the transactions. Users
            can easily modify their inventory, offers, and connect with product
            owner.
          </p>
        </div>
        <div className="features">
          <h2>Key Features</h2>
          <div className="feature-1">
            <h3>Making an offer</h3>
            <p className="feature-desc">
              Make an offer by clicking the 'Make AN OFFER' button, choose the item and the amount of money you want to offer
            </p>
            <img src={f1} alt="" />
          </div>
          <div className="feature-1">
            <h3>Making an offer</h3>
            <p className="feature-desc">
              Make an offer by clicking the 'Make AN OFFER' button, choose the item and the amount of money you want to offer
            </p>
            <img src="/" alt="" />
          </div>
          <div className="feature-2">
            <h3>Making an offer</h3>
            <p className="feature-desc">
              Make an offer by clicking the 'Make AN OFFER' button, choose the item and the amount of money you want to offer
            </p>
            <img src="/" alt="" />
          </div>
          <div className="feature-1">
            <h3>Making an offer</h3>
            <p className="feature-desc">
              Make an offer by clicking the 'Make AN OFFER' button, choose the item and the amount of money you want to offer
            </p>
            <img src={f3} alt="offer.png" />
          </div>
        </div>
      </Description>
    </>
  );
};

export default Project;
