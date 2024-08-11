// import { createGlobalStyle } from "styled-components";

// const GlobalStyles = createGlobalStyle`
// * {
//     box-sizing: border-box;
// }
// body {
//     font-size: .940rem;
//     background-color: white;
//     line-height: normal;
//   }
//   ul {

//     background-color: white;
// }
// ul {

//     list-style: none;
// }
// `;

// export default GlobalStyles;
import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Inknut+Antiqua:wght@300;400;500;600;700;800;900&family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap');
  * {
      box-sizing: border-box;
  }

  body {
      font-family: 'Open Sans', sans-serif;
      font-size: .940rem;
      background-color: white;
      line-height: normal;
  }

  ul {
      background-color: white;
      list-style: none;
  }
`;

export default GlobalStyles;
