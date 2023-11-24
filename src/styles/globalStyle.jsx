import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const GlobalStyle = createGlobalStyle`
${reset}
  * {
    box-sizing: border-box;
  }
  body {
    background-color: red;
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
