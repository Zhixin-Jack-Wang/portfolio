import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Project from "./Project";
import { projects } from "../data/project";
const MyWork = () => {
  const [value, setValue] = useState({ projects });
  console.log(projects);
  console.log(value);
  return (
    <ProjectWrapper>
      {value.projects.map((project, index) => {
        console.log(index);
        return <Project {...project} key={index} index={index} />;
      })}
    </ProjectWrapper>
  );
};

export default MyWork;

const ProjectWrapper = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
`;
