import styled from "styled-components";
import { ButtonStyles } from "../button/button.styles";

export const ProductStyles = styled.div`
   display: flex;
   flex-direction: column;
   cursor: pointer;

   &:hover ${ButtonStyles} {
      visibility: visible;
      opacity: 1;
   }
`;

export const ProductImageStyles = styled.div`
   position: relative;
   flex: 1;
   background-size: cover;

   & > ${ButtonStyles} {
      visibility: hidden;
      opacity: 0;
      position: absolute;
      left: 50%;
      bottom: 2rem;
      translate: -50% 0;
      transition: all .2s;
   }
`;

export const ProductDetailsStyles = styled.div`
   display: flex;
   justify-content: space-between;
   font-size: 2rem;
   padding: 1.5rem 0;
`;