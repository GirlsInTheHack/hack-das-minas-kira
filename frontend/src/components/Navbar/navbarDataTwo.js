import React from "react";
import * as BiIcons from "react-icons/bi";
import * as FaIcons from "react-icons/fa";
import * as IoIcons from "react-icons/io5";
import * as BsIcons from "react-icons/bs";


export const NavbarDataTwo = [
    {
    title: "conecte-se",
    path: "/conecte",
    icon: <BiIcons.BiLogIn/>,
    cName: 'nav-text'
    },
    {
        title:"cadastro",
        path: "/cadastro",
        icon: <FaIcons.FaRegIdCard />,
        cName: 'nav-text'
    },
    {
        title: "configurações",
        path: "/config",
        icon: <IoIcons.IoSettingsOutline />,
        cName: 'nav-text'
    },
    {
        title: "faq",
        path: "/faq",
        icon: <BiIcons.BiQuestionMark />,
        cName: 'nav-text'
    },
    {
        title: "fale conosco",
        path: "/fale",
        icon: <BsIcons.BsFillChatFill />,
        cName: 'nav-text'
    }
]