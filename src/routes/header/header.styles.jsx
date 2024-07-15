import styled from "styled-components";
import { Link } from "react-router-dom";

export const HeaderStyles = styled.header`
   position: relative;
   display: flex;
   justify-content: space-between;
   align-items: center;
   padding: 3rem 2rem;

   & .a {
      display: block;
      text-decoration: none;
      color: black;
   }
`;

export const HeaderLogoStyles = styled.img`
   height: 5rem;
`;

export const HeaderNavigationStyles = styled.nav`
   display: flex;
   align-items: center;
   gap: 2rem;
   font-size: 2rem;
   text-transform: uppercase;
`;

export const HeaderNavLinkStyles = styled(Link)`
   display: block;
   padding: 1rem;
   cursor: pointer;
`;