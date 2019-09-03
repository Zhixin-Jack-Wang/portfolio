import React from "react";
import Carousel from "./Carousel";
import { DivWrapper, Description,SectionWrapper } from "./styles";
import f1 from "./img/feature/f1.PNG";
import f2 from "./img/feature/f2.PNG";
import f3 from "./img/feature/f3.PNG";
import f4 from "./img/feature/f4.PNG";
const Project = () => {
  return (
    <SectionWrapper>
      <DivWrapper>
        <div className="project-header">
          <h1 className="project-title">Chrysopoeia</h1>
          <div className="project-link">
          <a href="https://github.com/Zhixin-Jack-Wang/Chrysopoeia"><button className="project-link-btn btn-git"><i class="fab fa-github" aria-hidden="true"> Github</i></button></a>
          <a href="https://chrysopoeia.herokuapp.com/"><button className="project-link-btn"><i class="fas fa-link" aria-hidden="true"> Website</i></button></a>
          </div>
        </div>
        <div className="carousel">
          <Carousel />
        </div>
      </DivWrapper>
      <Description>
        <div className="summary">
          <h2 className="summary-title">Summary</h2>
          <p className="summary-content">
            Chrysopoeia is a trading platform for people to exchange and sell
            pre-owned or used products. What makes Chrysopoeia standout among
            similar platforms is that it provides a more straight-forward
            service and an user-friendly UI to speed up the transactions. Users
            can easily modify their inventory, offers, and connect with product
            owner.
          </p>
        </div>
        <div className="features">
          <h2>Feature</h2>
          <div className="feature">
            <h3 className="feature-title">Making an offer</h3>
            <div className="feature-content">
              <img className="feature-pic" src={f1} alt="f1.png" />
              <p className="feature-desc">
                Make an offer by clicking the 'Make AN OFFER' button, choose the
                item and the amount of money you want to offer
              </p>
            </div>
          </div>
          <div className="feature">
            <h3 className="feature-title">Manage Your Inventory</h3>
            <div className="feature-content">
              <img className="feature-pic" src={f2} alt="f1.png" />
              <p className="feature-desc">
                Add new items by clicking the 'ADD NEW' icon, and supply all the
                information, then hit submit to add item to your inventory.
                Modify item by changing the information you entered earlier.
                Delete item by clicking the delete button.
              </p>
            </div>
          </div>
          <div className="feature">
            <h3 className="feature-title">Chat</h3>
            <div className="feature-content">
              <img className="feature-pic" src={f3} alt="f1.png" />
              <p className="feature-desc">
                Each order has a dedicated chat log. Start chatting with the
                buyer/owner by hitting the 'Chat Log' button.It's intended to
                facilitate communication about payment and sharing additional
                information.
              </p>
            </div>
          </div>
          <div className="feature">
            <h3 className="feature-title">Offer Management</h3>
            <div className="feature-content">
              <img className="feature-pic" src={f4} alt="f1.png" />
              <p className="feature-desc">
                View all your offers on the offer page. On this page, you can
                accept or decline incoming offers, recall outgoing offers, and
                check offer information including item details, offer details,
                and chat log.
              </p>
            </div>
          </div>
        </div>
      </Description>
    </SectionWrapper>
  );
};

export default Project;
