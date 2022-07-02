import React from "react";
import { Lista, ItemLista} from './styles';

function Footer(){
    return (
        <Lista>
            <ItemLista>
                <img src='./images/calendario.png' />
            </ItemLista>
            <ItemLista>
                <img src='./images/conteudo.png' />
            </ItemLista>
            <ItemLista>
                <img src='./images/home2.png' />
            </ItemLista>
            <ItemLista>
                <img src='./images/chat.png' />
            </ItemLista>
            <ItemLista>
                <img src='./images/shopping.png' />
            </ItemLista>
        </Lista>
    );
}

export default Footer;