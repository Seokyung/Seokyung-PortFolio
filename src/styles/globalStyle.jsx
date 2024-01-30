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
  // font
  --font-family-kor: "Nanum Gothic";
  --font-family-kor-title: "Bagel Fat One";
  /* --font-family-kor-title: "NPSfontRegular"; */
  --font-family-eng: "Raleway";
  --font-family-eng-title: "Lobster";
  --font-family-eng-card-title: "Black Han Sans";
  --font-color-primary: #f28830;
  --font-color-secondary: #333;
  --font-color-light: #f8f8f8;
  --font-size-default: 1rem;
  --font-size-md: 1.25rem;
  --font-size-lg: 1.75rem;
  --font-size-title: calc(2rem + 0.75vw);
  --font-size-title-lg: calc(2.5rem + 0.75vw);

  // background
  --bg-color-primary: #333;
  --bg-color-secondary: #e6781e;
  --bg-color-light: #f8f8f8;
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
