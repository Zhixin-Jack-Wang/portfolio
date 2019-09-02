import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Dropdown from "./styled/Dropdown";
const Navbar = () => {
  const [value, setValue] = useState({ renderOverlay: false, clicked: false });
  const items = useRef(null);
  const ham = useRef(null);

  const clickHandler = e => {
    console.log("click" + e.target.className);
    const itemsRef = items.current;
    const hamRef = ham.current;
    if (itemsRef.className == "items") {
      itemsRef.className = "items items-show";
      hamRef.classList.add("hamburger-close");
      setValue({ clicked: true, renderOverlay: true });
    } else {
      itemsRef.className = "items";
      hamRef.classList.remove("hamburger-close");
      setValue({ clicked: true, renderOverlay: false });
    }
  };

  const renderOverlay = () => {
    if (value.clicked === true) {
      if (value.renderOverlay === true)
        return (
          <div className="overlay-portrait  drop-ani">
            <div className="portrait-holder" />
          </div>
        );
      else
        return (
          <div className="overlay-portrait rise-ani">
            <div className="portrait-holder" />
          </div>
        );
    }
  };
  return (
    <>
      {renderOverlay()}
      <Nav clicked={value.clicked}>
        <Link to="/">
          <span className="nav-brand">Zhixin Wang</span>
        </Link>
        <Dropdown>
          <div className="hamburger" onClick={clickHandler} ref={ham}>
            <div className="hamburger-line" />
            <div className="hamburger-line" />
            <div className="hamburger-line" />
          </div>
        </Dropdown>
        <div className="items" ref={items}>
          <Link to="/" className="items__item" onClick={clickHandler}>
            Home
          </Link>
          <Link to="/about" className="items__item" onClick={clickHandler}>
            About
          </Link>
          <Link to="/mywork" onClick={clickHandler} className="items__item">
            My Work
          </Link>
        </div>
        <div className="contact">
          <span>
            <strong>Email: </strong>zxwang.jack@gmail.com
          </span>
        </div>
      </Nav>
    </>
  );
};

export default Navbar;

const Nav = styled.nav`
  position: fixed;
  z-index: 3;
  top: 0;
  width: 100%;
  height: 3rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: rgba(21, 38, 58, 0.3);
  .nav-brand {
    color: white;
    margin-left: 1rem;
    font-size: 1.2rem;
  }
  .items {
    display: ${({ clicked }) => (clicked ? "flex" : "none")};
    flex-direction: column;
    position: absolute;
    align-items: center;
    top: 50vh;
    width: 100%;
    height: 50vh;
    background-color: rgba(117, 109, 100, 0.5);
    color: white;
    list-style: none;
    margin: 0;
    padding: 0;
    animation-name: menu-drop;
    animation-duration: 1s;
    animation-fill-mode: forwards;
    @keyframes menu-drop {
      0% {
        top: 50vh;
      }
      90% {
        top: 100vh;
      }
      100% {
        top: 150vh;
      }
    }
    &-show {
      animation-name: menu-rise;
      animation-duration: 1s;
      animation-fill-mode: forwards;
      @keyframes menu-rise {
        0% {
          top: 100vh;
        }
        100% {
          top: 50vh;
        }
      }
    }
    &__item {
      margin: 2rem 0;
      font-size: 2rem;
      text-decoration: none;
      color: white;
      &:hover {
        color: blue;
      }
      @media (min-width: 768px) {
        margin: 1rem;
      }
    }
  }
  .contact {
    position: fixed;
    width: 100%;
    bottom: 0;
    display: flex;
    justify-content: center;
    background-color: steelblue;
    color: white;
  }
`;
