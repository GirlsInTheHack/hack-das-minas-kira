import styled from "styled-components";

export const Video = styled.div`
    width: 100%;
    z-index: 20;
    height: 100%;
    left: 0px;
    top: 0px;
    margin: auto;
`;

export const Button = styled.button`
    background-color: white;
    border: none;
    color: black;
    background-image: linear-gradient(45deg, #ff00bb, #ea1b23);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-family:Kotex-bold
`;

export const ButtonLeft = styled.div`
    text-align: left;
    display: table-cell;
    padding: 2vh 14vw;
`;

export const ButtonRight = styled.div`
    text-align: right;
    display: table-cell;
    padding: 2vh 14vw;
`;

export const Img = styled.img`
    background-image: linear-gradient(45deg, #ff00bb, #ea1b23);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
`;

export const TitleVideo = styled.h2`
    font-family: Kotex-Bold;
    font-size:33px;
    text-align:left;
    margin:5% 10% 0 10%;
    letter-spacing: 0.5%;
`;

export const Data = styled.p`
    font-size:12px;
    font-family: Kotex;
    text-align:left;
    margin-left:10%;

`;
export const Text = styled.p`
    font-size:18px;
    margin:2% 10% 2% 10%;
    text-align:left;
    font-family:Kotex;
   
`;
export const ButtonDiv = styled.div`
    display: table;
    width: 100%;
   
`;
export const Alert = styled.p`
    font-size:14px;
    margin:2% 10% 7% 10%;
    text-align:left;
    font-family:Kotex-Bold;
    padding-top: 20px;
    `;
