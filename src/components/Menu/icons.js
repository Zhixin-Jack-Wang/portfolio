import React from "react";

const Open = props => (
  <svg {...props} viewBox="0 0 408 408" xmlns="http://www.w3.org/2000/svg">
    <g clipPath="url(#clip0)">
      <path
        d="M386.258 91.567L203.718 273.512L21.179 91.567L0 112.815L203.718 315.87L407.437 112.815L386.258 91.567Z"
        fill="white"
      />
    </g>
    <defs>
      <clipPath id="clip0">
        <rect width="407.437" height="407.437" fill="white" />
      </clipPath>
    </defs>
  </svg>
);
const Close = props => (
  <svg {...props} viewBox="0 0 408 408" xmlns="http://www.w3.org/2000/svg">
    <g clipPath="url(#clip0)">
      <path
        d="M91.567 21.179L273.512 203.719L91.567 386.258L112.815 407.437L315.87 203.719L112.815 0L91.567 21.179Z"
        fill="white"
      />
    </g>
    <defs>
      <clipPath id="clip0">
        <rect
          width="407.437"
          height="407.437"
          fill="white"
          transform="translate(0 407.437) rotate(-90)"
        />
      </clipPath>
    </defs>
  </svg>
);

const None = props => (
  <div
    {...props}
    style={{
      width: "1em",
      height: "1em",
      marginRight: "10px",
      display: "inline-block"
    }}
  ></div>
);

const Contact = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    <path d="M0 0h24v24H0z" fill="none" />
    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
  </svg>
);

const Welcome = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0V0z" />
    <circle cx="15.5" cy="9.5" r="1.5" />
    <circle cx="8.5" cy="9.5" r="1.5" />
    <path fill="none" d="M0 0h24v24H0V0z" />
    <circle cx="15.5" cy="9.5" r="1.5" />
    <circle cx="8.5" cy="9.5" r="1.5" />
    <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm0-2.5c2.33 0 4.32-1.45 5.12-3.5h-1.67c-.69 1.19-1.97 2-3.45 2s-2.75-.81-3.45-2H6.88c.8 2.05 2.79 3.5 5.12 3.5z" />
  </svg>
);

const About = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z" />
    <path d="M0 0h24v24H0z" fill="none" />
  </svg>
);

const Work = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    <path d="M0 0h24v24H0z" fill="none" />
    <path d="M20 6h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-6 0h-4V4h4v2z" />
  </svg>
);

const Portfolio = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-5 14H4v-4h11v4zm0-5H4V9h11v4zm5 5h-4V9h4v9z" />
    <path d="M0 0h24v24H0z" fill="none" />
  </svg>
);

const App = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    <path d="M0 0h24v24H0z" fill="none" />
    <path d="M5 16c0 3.87 3.13 7 7 7s7-3.13 7-7v-4H5v4zM16.12 4.37l2.1-2.1-.82-.83-2.3 2.31C14.16 3.28 13.12 3 12 3s-2.16.28-3.09.75L6.6 1.44l-.82.83 2.1 2.1C6.14 5.64 5 7.68 5 10v1h14v-1c0-2.32-1.14-4.36-2.88-5.63zM9 9c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm6 0c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z" />
  </svg>
);

export { None, Open, Close, Contact, Welcome, About, Work, Portfolio,App };
