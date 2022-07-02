import { Link } from "react-router-dom";
import styled from "styled-components";

export const Nav = styled.div`
   height:80px;
   display: flex;
   justify-content: flex-end;
   align-items: center;
`

export const NavIcon = styled(Link)`
    margin-left: 2rem;
    font-size: 2rem;
    height: 80px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
`

export const SideBarNav = styled.nav`
    background: #15171c;
    width: 250px;
    height: 100vh;
    display: flex;
    justify-content: center;
    position: fixed;
    top: 0;
    right: ${({ navbar }) => (navbar ? '0' : '-100%')};
    transition: 350ms;
    z-index: 10;
`

export const SideBarWrap = styled.div`
    width: 100%;
`