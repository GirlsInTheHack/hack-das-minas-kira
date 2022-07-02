import React from "react";
import { SideBarLink, SiderBarLabel } from "./style";

const SubMenu = ({ item }) => {
    return(
        <div>
            <SideBarLink to={item.path}>
                <div>
                    {item.icon}
                    <SiderBarLabel>{item.title}</SiderBarLabel>
                </div>
            </SideBarLink>
        </div>
    );
}


export default SubMenu;