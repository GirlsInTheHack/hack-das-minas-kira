import React, { useState } from 'react';
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { NavbarData } from './navbarData';
import { Hr, Nav, NavIcon, SideBarNav, SideBarWrap } from "./style";
import { IconContext } from 'react-icons/lib';
import SubMenu from './subMenu';
import { NavbarDataTwo } from './navbarDataTwo';

const Navbar = () => {
    const [navbar, setNavbar] = useState(false);

    const showNavbar = () => setNavbar(!navbar);
    return(
        <div>
            <IconContext.Provider value={{color: '#626162', size: '20px'}}>
            <Nav>
                <NavIcon to="#">
                     <FaIcons.FaBars onClick={showNavbar}/>
                </NavIcon>
            </Nav>
            </IconContext.Provider>
            <IconContext.Provider value={{color: '#fff', size: '20px'}}>
            <SideBarNav navbar={navbar}>
                <SideBarWrap>
                        <NavIcon to="#" className="menu-bars">
                            <AiIcons.AiOutlineClose onClick={showNavbar}/>
                        </NavIcon>
                        {NavbarData.map((item, index) => {
                            return <SubMenu item={item} key={index}/>
                        })}
                        <Hr/>
                        {NavbarDataTwo.map((item, index) => {
                            return <SubMenu item={item} key={index}/>
                        })}
                </SideBarWrap>
            </SideBarNav>
            </IconContext.Provider>
        </div>
    );
};


export default Navbar;
