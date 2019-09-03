import React, { useState,useEffect } from "react";
export const Dot = ({ index, click, opacity }) => {
  return (
    <svg
      index={index}
      className="dot"
      width="15"
      height="15"
      opacity={opacity}
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      onClick={() => {
        click(index);
      }}
    >
      <circle cx="6" cy="6" r="6" fill="white" />
    </svg>
  );
};
