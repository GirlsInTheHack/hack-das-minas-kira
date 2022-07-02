import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as RiIcons from "react-icons/ri";

export const NavbarData = [
    {
    title: "home",
    path: "/home",
    icon: <AiIcons.AiFillHome />,
    cName: 'nav-text'
    },
    {
        title:"calendário",
        path: "/calendario",
        icon: <IoIcons.IoIosCalendar />,
        cName: 'nav-text'
    }
]