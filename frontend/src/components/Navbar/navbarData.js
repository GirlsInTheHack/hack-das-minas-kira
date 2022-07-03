import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as RiIcons from "react-icons/ri";
import * as BiIcons from "react-icons/bi";

export const NavbarData = [
    {
    title: "home",
    path: "/home",
    icon: <BiIcons.BiHome/>,
    cName: 'nav-text'
    },
    {
        title:"calendário",
        path: "/calendario",
        icon: <BiIcons.BiCalendar />,
        cName: 'nav-text'
    },
    {
        title: "conteúdo",
        path: "/conteudo",
        icon: <BiIcons.BiBook />,
        cName: 'nav-text'
    },
    {
        title: "chama a kira",
        path: "/chama",
        icon: <BiIcons.BiChat />,
        cName: 'nav-text'
    },
    {
        title: "shopping",
        path: "/shopping",
        icon: <BiIcons.BiCart />,
        cName: 'nav-text'
    }
]