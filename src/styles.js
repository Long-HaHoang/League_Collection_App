import { createGlobalStyle, css } from "styled-components";

const globalStytle = css`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  * {
    margin: 0;
  }

  body {
    font-family: Roboto;
    font-size: 16px;
    color: #333;
    margin: 0;
    padding: 0;
  }
`;

export default createGlobalStyle`${globalStytle}`;
