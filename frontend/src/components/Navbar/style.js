import { Link } from "react-router-dom";
import styled from "styled-components";

export const Nav = styled.div`
   height:80px;
   display: flex;
   justify-content: flex-end;
   align-items: center;
   box-shadow: 0px 10px 15px -3px rgba(0,0,0,0.1);
`

export const NavIcon = styled(Link)`
    margin-left: 10px;
    margin-right: 25px;
    font-size: 2rem;
    height: 60px;
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
    padding: 20px;
`

export const SideBarLink = styled(Link)`
    display: flex;
    color: #e1e9fc;
    justify-content: space-between;
    align-items: center;
    padding: 5px;
    list-style: none;
    height:45px;
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


export const Hr = styled.hr`
display: block; 
margin-before: 0.5em; 
margin-after: 0.5em; 
margin-start: auto; 
margin-end: auto; 
overflow: hidden; 
border-style: inset; 
border-width: 1px;
`