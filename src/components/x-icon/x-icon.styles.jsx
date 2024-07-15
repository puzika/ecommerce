import styled from "styled-components";

export const XIconContainer = styled.div`
   width: min-content;
   padding: .5rem;
   box-sizing: content-box;
   cursor: pointer;
`;

export const X = styled.div`
   position: relative;
   width: 2.5rem;
   height: 2.5rem;

   &::before,
   &::after {
      content: '';
      position: absolute;
      top: 50%;
      left: 50%;
      translate: -50% -50%;
      width: 100%;
      height: 10%;
      background-color: rgb(89, 89, 89);
   }

   &::before {
      rotate: -45deg;
   }

   &::after {
      rotate: 45deg;
   }
`;

// .x-icon {
//    

//    &__container {

//    }
// }