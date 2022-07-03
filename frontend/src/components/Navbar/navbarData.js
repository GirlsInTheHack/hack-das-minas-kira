import React from "react";
import * as BiIcons from "react-icons/bi";


export const NavbarData = [
    {
    title: "home",
    path: "/",
    icon: <BiIcons.BiHome/>,
    cName: 'nav-text'
    },
    {
        title:"calendário",
        path: "/",
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
        path: "/",
        icon: <BiIcons.BiChat />,
        cName: 'nav-text'
    }
]