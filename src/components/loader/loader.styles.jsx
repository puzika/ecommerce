import styled, {keyframes} from "styled-components";

const rotate = keyframes`
   0% {
      rotate: 0;
   }

   100% {
      rotate: 360deg;
   }
`;

const loaderSize = '8rem';

export const LoaderSpinnerStyles = styled.div`
   position: absolute;
   top: 50%;
   left: 50%;
   translate: -50% -50%;
   width: ${loaderSize};
   height: ${loaderSize};
   border-left: .5rem solid black;
   border-radius: 50%;
   border-top: .5rem solid transparent;
   animation: ${rotate} .65s linear infinite;
`;

export const LoaderOverlayStyles = styled.div`
   position: fixed;
   top: 0;
   left: 0;
   width: 100%;
   height: 100vh;
   background-color: rgba(0, 0, 0, .2);
`