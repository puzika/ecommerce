import styled from "styled-components";

export const CheckoutStyles = styled.div`
   margin: 5rem auto;
   width: 60%;
   color: rgb(89, 89, 89);

   & > * {
      display: flex;
      align-items: center;
      border-bottom: .1rem solid rgb(89, 89, 89);
      padding: 1rem 0;
      gap: 4rem;

      & > * {
         flex: 1;
      }
   }
`;

export const CheckoutColumnTitleStyles = styled.div`
   font-size: 1.4rem;
`;

export const CheckoutTotalCostStyles = styled.p`
   flex-direction: row-reverse;
   font-size: 4rem;
   text-transform: uppercase;
   padding: 2.5rem;
   border: none;
`;