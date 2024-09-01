import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import MilkAndHoney from "../assets/fonts/MilkAndHoney.woff";
import DukeCharming from "../assets/fonts/DukeCharming.woff";
import VitroCore from "../assets/fonts/VitroCore.woff";

export const GlobalStyle = createGlobalStyle`
${reset}
@font-face {
    font-family: 'NPSfontRegular';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2310@1.0/NPSfontRegular.woff2') format('woff2');
    font-weight: normal;
    font-style: normal;
}
@font-face {
    font-family: 'VitroCore';
    src: local('VitroCore'), local('VitroCore');
    src: url(${VitroCore}) format('woff');
    font-style: normal;
}
@font-face {
    font-family: 'RixXladywatermelonR';
    src: url('https://fastly.jsdelivr.net/gh/projectnoonnu/2408-4@1.0/RixXladywatermelonR.woff2') format('woff2');
    font-weight: normal;
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
  --max-width: 1000px;
  --max-card-width: 750px;
  --max-box-width: 900px;

  // color
  --color-white: #f8f8f8;
  --color-black: #120f06;
  --color-dark-orange: #c06016;
  --color-light-orange: #c4986b;
  --color-orange: #e6781e;
  --color-light-blue: #6c847c;
  --color-blue: #0c6cac;
  --color-dark-green: #43584e;
  --color-light-green: #637f69;
  --color-dark-brown: #372619;
  --color-light-brown: #876f51;
  --color-grey-brown: #585140;

  // font
  --font-family-kor: "Pretendard Variable";
  --font-family-kor-title: "VitroCore";
  --font-family-kor-card-title: "Bagel Fat One";
  --font-family-eng: "Raleway";
  --font-family-eng-title: "Black Han Sans";
  --font-family-eng-card-title: "MilkAndHoney";

  --font-color-default: #120f06;
  --font-color-primary: #e6781e;
  --font-color-secondary: #120f06;
  --font-color-grey: #5e5e5e;
  --font-color-light: #f8f8f8;

  --font-size-default: 1rem;
  --font-size-title: 2rem;

  // background
  --bg-color-default: #585140;
  --bg-color-primary: #3e3e3e;
  --bg-color-secondary: #e6781e;
  --bg-color-light: #f8f8f8;

  // navigation
  --nav-height: 52px;
  --nav-height-mobile: 52px;
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
    flex-wrap: wrap;
    margin-top: var(--nav-height);
    color: var(--font-color-default);
    font-family: var(--font-family-kor), sans-serif;
    background-color: var(--bg-color-default);
    word-break: keep-all;
    overflow-wrap: break-word;
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
    background-color: #5e5e5e;
  }

  // header animation
  @keyframes openMenu {
    0% {
      transform: translateX(100%);
    }
    100% {
      transform: translateX(0);
    }
  }
  @keyframes closeMenu {
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

// main animation
@keyframes slideLeft {
  0% {
    left: 50%;
  }
  50% {
    left: 25%;
  }
  75% {
    left: 10%;
  }
  100% {
    left: 0;
  }
}
@keyframes slideRight {
  0% {
    right: 50%;
  }
  50% {
    right: 25%;
  }
  75% {
    right: 10%;
  }
  100% {
    right: 0;
  }
}
@keyframes appearFromBottom {
  0% {
    opacity: 0;
    transform: translateY(50%);
  }
  50% {
    opacity: 0.5;
    transform: translateY(25%);
  }
  75% {
    opacity: 0.75;
    transform: translateY(10%);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
`;
