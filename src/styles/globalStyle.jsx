import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const GlobalStyle = createGlobalStyle`
${reset}
:root {
  --primary-color: darkorange;
  --bg-color-primary: #333;
  --font-family-kor: "Nanum Gothic";
  --font-family-eng: "Raleway";
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
