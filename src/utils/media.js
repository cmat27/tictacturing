import { css } from "styled-components";
/* create a media object to make the app responsive to 
different screen sizes */
export const media = {
  handheld: (...args) => css`
    @media (max-width: 800px) {
      ${css(...args)}
    }
  `
};
