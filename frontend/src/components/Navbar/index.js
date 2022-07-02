import React, { useState } from 'react';
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { Link } from 'react-router-dom';
import { NavbarData } from './navbarData';
import { Nav, NavIcon, SideBarNav, SideBarWrap } from "./style";
import { IconContext } from 'react-icons/lib';

const Navbar = () => {
    const [navbar, setNavbar] = useState(false);

    const showNavbar = () => setNavbar(!navbar);
    return(
        <div>
            <IconContext.Provider value={{color: '#616161'}}>
            <Nav>
                <NavIcon to="#">
                     <FaIcons.FaBars onClick={showNavbar}/>
                </NavIcon>
            </Nav>
            <SideBarNav navbar={navbar}>
                <SideBarWrap>
                        <NavIcon to="#" className="menu-bars">
                            <AiIcons.AiOutlineClose onClick={showNavbar}/>
                        </NavIcon>
                </SideBarWrap>
            </SideBarNav>
            </IconContext.Provider>
        </div>
    );
};


export default Navbar;
