import styled from "styled-components";

export const SignUpHeadingStyles = styled.h2`
   font-size: 2.5rem;
   margin-bottom: 1rem;
`;

export const SignUpSubHeadingStyles = styled.p`
   font-size: 1.6rem;
   color: rgb(89, 89, 89);
   margin-bottom: 4rem;
`;

export const SignUpFormStyles = styled.form`
   display: flex;
   flex-direction: column;
   gap: 4rem;

   & > button {
      align-self: center;
   }
`;