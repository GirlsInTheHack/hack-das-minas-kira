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
    background: #231f20;
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

export const SideBarLink = styled(Link)`
    display: flex;
    color: #e1e9fc;
    justify-content: space-between;
    align-items: center;
    padding: 1px;
    list-style: none;
    height:60px;
    text-decoration: none;
    font-size: 18px;

    &:hover {
        backgroud: #252831;
        color: #ff007f;
        cursor: pointer;
    }
`

export const SiderBarLabel = styled.span`
    margin-left: 12px;
`;