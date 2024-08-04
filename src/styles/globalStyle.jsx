import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import MilkAndHoney from "../assets/fonts/MilkAndHoney.woff";
import DukeCharming from "../assets/fonts/DukeCharming.woff";

export const GlobalStyle = createGlobalStyle`
${reset}
@font-face {
    font-family: 'SOYOMapleBoldTTF';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2310@1.0/SOYOMapleBoldTTF.woff2') format('woff2');
    font-weight: 700;
    font-style: normal;
}
@font-face {
    font-family: 'NPSfontRegular';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2310@1.0/NPSfontRegular.woff2') format('woff2');
    font-weight: 400;
    font-style: normal;
}
@font-face {
    font-family: 'MilkAndHoney';
    src: local('MilkAndHoney'), local('MilkAndHoney');
    src: url(${MilkAndHoney}) format('woff');
    font-style: normal;
}
@font-face {
    font-family: 'DukeCharming';
    src: local('DukeCharming'), local('DukeCharming');
    src: url(${DukeCharming}) format('woff');
    font-style: normal;
}
:root {
  // width
  --max-width: 1400px;

  // color
  --color-dark-orange: #c06016;
  --color-light-orange: #d7b993;
  --color-orange: #f28830;
  --color-light-blue: #9ad3d4;
  --color-dark-green: #436459;
  --color-light-green: #637f69;
  --color-dark-brown: #2f1305;
  --color-light-brown: #3d3528;
  --color-grey-brown: #585140;

  // font
  --font-family-kor: "Nanum Gothic";
  --font-family-kor-title: "NPSfontRegular";
  --font-family-kor-card-title: "Bagel Fat One";
  --font-family-eng: "Raleway";
  --font-family-eng-title: "Lobster";
  --font-family-eng-card-title: "Black Han Sans";

  --font-color-default: #f8f8f8;
  --font-color-primary: #f28830;
  --font-color-secondary: #3e3e3e;
  --font-color-light: #f8f8f8;

  --font-size-default: 1rem;
  --font-size-sm: 0.9rem;
  --font-size-md: 1.25rem;
  --font-size-lg: 1.75rem;
  --font-size-title: calc(2rem + 0.75vw);
  --font-size-title-lg: calc(2.5rem + 0.75vw);

  // background
  --bg-color-default: #585140;
  --bg-color-primary: #333;
  --bg-color-secondary: #e6781e;
  --bg-color-light: #f8f8f8;

  // navigation
  --nav-height: 56px;
  --nav-height-mobile: 56px;
  --nav-bg-color: #3d3528;

  // button
  --btn-color-default: #f8f8f8;
}
  * {
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  body {
    margin-top: var(--nav-height);
    color: var(--font-color-default);
    font-family: var(--font-family-kor), sans-serif;
    background-color: var(--bg-color-default);
    word-break: keep-all;
    @media all and (max-width: 768px) {
      margin-top: var(--nav-height-mobile);
		}
  }
  a {
    outline: none;
    text-decoration: none;
  }
  button {
    cursor: pointer;
    padding: 0;
    border: none;
    background: none;
  }
  hr {
    border: none;
  }

  // animation
  @keyframes slideLeft {
    0% {
      transform: translateX(100%);
    }
    100% {
      transform: translateX(0);
    }
  }
  @keyframes slideRight {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(100%);
    }
  }
  @keyframes fadeInMenu {
    0% {
      background-color: rgba(0,0,0,0);
    }
    50% {
      background-color: rgba(0,0,0,0.25);
    }
    100% {
      background-color: rgba(0,0,0,0.5);
    }
  }
  @keyframes fadeOutMenu {
    0% {
      background-color: rgba(0,0,0,0.5);
    }
    50% {
      background-color: rgba(0,0,0,0.25);
    }
    100% {
      background-color: rgba(0,0,0,0);
    }
  }
`;
