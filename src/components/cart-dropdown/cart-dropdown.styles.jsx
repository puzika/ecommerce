import styled, { css } from "styled-components";

const DropdownHidden = css`
   visibility: hidden;
   opacity: 0;
`;

export const DropdownStyles = styled.div`
   position: absolute;
   top: 100%;
   right: 0;
   width: 30rem;
   height: 40rem;
   background-color: white;
   border: .1rem solid black;
   display: flex;
   flex-direction: column;
   align-items: center;
   gap: 3rem;
   padding: 2rem;
   transition: all .3s;
   z-index: 10;
   ${({$isOpen}) => $isOpen || DropdownHidden}

   &::-webkit-scrollbar {
      display: none;
   }
`;

export const DropdownItemStyles = styled.div`
   flex: 1;
   width: 100%;
   color: rgb(89, 89, 89);
   font-size: 1.8rem;
   display: flex;
   flex-direction: column;
   align-items: center;
   gap: 2rem;
   overflow-y: scroll;

   &::-webkit-scrollbar {
      display: none;
   }
`;