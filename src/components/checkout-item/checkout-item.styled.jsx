import styled from "styled-components";

export const CheckoutItemStyles = styled.div`
   display: flex;
   font-size: 1.8rem;

   & > * {
      flex: 1;
   }
`;

export const CheckoutItemImgStyles = styled.img`
   width: 100%;
`;

export const CheckoutItemRemoveStyles = styled.div`
   padding: 1rem;
`;

export const CheckoutItemQuantityStyles = styled.div`
   display: flex;
   align-items: center;
   gap: 1rem;
`;

export const CheckoutItemQuantityControlStyles = styled.img`
   width: 2.5rem;
   cursor: pointer;
`;