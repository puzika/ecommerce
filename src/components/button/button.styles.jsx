import styled, { css } from "styled-components";

const DefaultButtonStyles = css`
   background-color: black;
   color: white;

   &:hover,
   &:active {
      background-color: white;
      color: black;
   }
`;

const InverseButtonStyles = css`
   background-color: white;
   color: black;

   &:hover,
   &:active {
      background-color: black;
      color: white;
   }
`;

const GoogleButtonStyles = css`
   background-color: rgb(0, 132, 255);
   color: white;
   border: .1rem solid rgb(0, 132, 255);

   &:hover,
   &:active {
      background-color: white;
      color: rgb(0, 132, 255);
   }
`;

export const ButtonStyles = styled.button`
   min-width: 20rem;
   font-size: 1.6rem;
   text-transform: uppercase;
   padding: 1.5rem 2.5rem;
   border: .1rem solid black;
   cursor: pointer;
   transition-property: background-color, color;
   transition-duration: .25s;

   ${({$styleType}) => ($styleType === 'default') ? DefaultButtonStyles :
      ($styleType === 'google') ? GoogleButtonStyles :
      ($styleType === 'inverse') && InverseButtonStyles
   }};
`;