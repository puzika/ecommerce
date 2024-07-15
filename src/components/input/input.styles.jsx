import styled, {css} from "styled-components";

const ShrinkedLabel = css`
   top: 0;
   left: 0;
   translate: 0 -100%;
   font-size: 1.2rem;
`;

const InputLabelCommonStyles = css`
   font-size: 1.8rem;
   color: rgb(89, 89, 89);
`

export const InputStyles = styled.label`
   position: relative;
   display: flex;
   flex-direction: column;
   border-bottom: .1rem solid black;
`;

export const InputFieldStyles = styled.input`
   ${InputLabelCommonStyles};
   flex: none;
   padding: 1rem .5rem;
   height: 4rem;
   border: none;
   outline: none;

   &:focus ~ span {
      ${ShrinkedLabel};
   }
`;

export const InputLabelStyles = styled.span`
   ${InputLabelCommonStyles};
   position: absolute;
   left: .5rem;
   top: 50%;
   translate: 0 -50%;
   transition: all .25s;
   ${({filled}) => filled && ShrinkedLabel};
`;