import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const GlobalStyle = createGlobalStyle`
${reset}
:root {
  // font
  --font-family-kor: "Nanum Gothic";
  --font-family-kor-title: "Bagel Fat One";
  --font-family-eng: "Raleway";
  --font-family-eng-title: "Lobster";
  --font-color-primary: darkorange;
  --font-color-secondary: #333;

  // background
  --bg-color-primary: #333;
}
  * {
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  body {
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
`;
