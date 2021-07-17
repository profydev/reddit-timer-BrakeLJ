import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
// Variables 
:root {
  --white: #fff;
  --black: #000;
  --color-grey: #93918F;
  --color-button: #FDB755;
  --color-days: #1E2537;
  
  //Text
  --font-heading: 'Bitter', serif;
  --font-body: 'Montserrat', sans-serif;
}

html {
  line-height: 1.15;
  box-sizing: border-box;
  -ms-text-size-adjust: 100%;
  text-size-adjust: 100%;
  font-size: 62.5%;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-rendering: optimizeLegibility;
}

*,
*:before,
*:after {
  box-sizing: inherit;
  
}

body {
  margin: 0;
  font-size: 1.4rem;
  font-family: var(--font-body);
  line-height: 2rem;
  font-weight: 400;
}

.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  border: 0;
  padding: 0;
  white-space: nowrap;
  clip-path: inset(100%);
  clip: rect(0 0 0 0);
  overflow: hidden;
}

img {
  height: auto;
  width: 100%;
  display: block;
}
`;

export default GlobalStyle;
