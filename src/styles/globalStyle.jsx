import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

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
:root {
  // color
  --color-dark-orange: #c06016;
  --color-light-orange: #d7b993;
  --color-orange: #f28830;
  --color-light-blue: #9ad3d4;
  --color-dark-green: #436459;
  --color-light-green: #637f69;
  --color-dark-brown: #2d1105;
  --color-light-brown: #3d3528;

  // font
  --font-family-kor: "Nanum Gothic";
  --font-family-kor-title: "NPSfontRegular";
  --font-family-kor-card-title: "Bagel Fat One";
  --font-family-eng: "Raleway";
  --font-family-eng-title: "Lobster";
  --font-family-eng-card-title: "Black Han Sans";

  --font-color-default: #3e3e3e;
  --font-color-primary: #f28830;
  --font-color-secondary: #333;
  --font-color-light: #f8f8f8;

  --font-size-default: 1rem;
  --font-size-md: 1.25rem;
  --font-size-lg: 1.75rem;
  --font-size-title: calc(2rem + 0.75vw);
  --font-size-title-lg: calc(2.5rem + 0.75vw);

  // background
  --bg-color-default: #3d3528;
  --bg-color-primary: #333;
  --bg-color-secondary: #e6781e;
  --bg-color-light: #f8f8f8;

  // navigation
  --nav-height: 60px;
}
  * {
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  body {
    color: var(--font-color-secondary);
    font-family: var(--font-family-kor), sans-serif;
    background-color: var(--bg-color-primary);
    margin-top: var(--nav-height);
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
`;
