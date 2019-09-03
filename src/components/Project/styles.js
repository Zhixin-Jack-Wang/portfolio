import React from "react";
import styled from "styled-components";

export const SectionWrapper = styled.section`
  position: absolute;
`
export const DivWrapper = styled.div`
  display: flex;
  flex-direction: column;
  .project-header {
    width: 80%;
    display: flex;
    justify-content: space-between;
    margin: 0rem 1.5rem;
    .project-title {
      font-size: 3rem;
    }
    .project-link {
      align-self: center;
      a{
        text-decoration:none;
      }
      &-btn {
        cursor:pointer;
        width: 5rem;
        height: 2rem;
        border-radius: 4px;
        border: none;
        font-weight:bold;
        &.btn-git {
          margin-right: 0.5rem;
        }
        &:active {
          position: relative;
          top: 1px;
        }
      }
    }
  }
  .carousel {
    width: 60%;
    align-self: center;
  }
`;

export const Description = styled.div`
  padding: 0rem 2rem;
  margin-bottom:2rem;
  font-size: 1.1rem;
  .summary {
    &-content {
      padding: 0 0 0 1rem;
    }
  }
  .feature {
    padding: 0 0 0 1rem;
    .feature-content {
      display: flex;
      justify-content: space-evenly;
      .feature-pic {
        width: 17rem;
      }
      .feature-desc {
        width: 40%;
      }
    }
  }
`;
