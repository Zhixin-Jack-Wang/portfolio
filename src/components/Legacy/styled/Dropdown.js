import styled from "styled-components";
const Dropdown = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  .hamburger {
    position: absolute;
    z-index: 3;
    right: 1rem;
    width: 100%;
    height: 20px;
    cursor: pointer;
    position: relative;
    &-line {
      z-index: 0;
      width: 1.75rem;
      height: 0.2rem;
      margin: 0 0 5px 0;
      transition: all 0.5s ease-out;
      background: white;
      &:nth-child(1) {
        top: 0.5rem;
      }
      &:nth-child(2) {
        top: 1rem;
      }
      &:nth-child(3) {
        top: 1.5rem;
      }
    }

    &-close {
      .hamburger-line {
        // Line 1 - Rotate
        &:nth-child(1) {
          transform: rotate(45deg) translate(5px, 5px);
        }

        // Line 2 - Hide
        &:nth-child(2) {
          opacity: 0;
        }

        // Line 3 - Rotate
        &:nth-child(3) {
          transform: rotate(-45deg) translate(7px, -6px);
        }
      }
    }
  }
`;

export default Dropdown;
