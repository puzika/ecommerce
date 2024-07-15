import styled from "styled-components";

export const ProductsStyles = styled.div`
   padding: 0 2rem;
   display: flex;
   flex-direction: column;
   gap: 10rem;
`;

export const ProductsHeadingStyles = styled.h1`
   margin-bottom: 5rem;
   text-transform: uppercase;
`;

export const ProductsContainerStyles = styled.div`
   margin: 0 auto;
   min-width: 80rem;
   display: grid;
   grid-template-columns: repeat(auto-fit, minmax(22rem, 1fr));
   grid-auto-rows: 40rem;
   gap: 2.5rem;
`;