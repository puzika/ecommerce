import styled from "styled-components";

export const CategoryStyles = styled.div`
   display: flex;
   justify-content: center;
   align-items: center;
   height: 30rem;
   min-width: 40rem;
   flex: 1;
   background-position: center;
   background-size: 100% 100%;
   background-repeat: no-repeat;
   border: .2rem solid black;
   transition: background-size .5s ease-out;
   cursor: pointer;

   &:hover {
      background-size: 120% 120%;
   }
`;

export const CategoryDescription = styled.div`
   background-color: rgba(255, 255, 255, .8);
   text-align: center;
   width: 22rem;
   padding: 2.5rem 0;
   border: .1rem solid black;
`;

export const CategoryHeading = styled.div`
   font-size: 3rem;
   text-transform: capitalize;
   margin-bottom: 1.5rem;
`;