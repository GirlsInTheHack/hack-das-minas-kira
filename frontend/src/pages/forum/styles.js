import styled from "styled-components";


export const Title = styled.h1`
    margin:2% 10% 2% 10%;
    margin-left:10%;
    text-align: left;
    font-family:Kotex;
`

export const Text = styled.p`
    font-size:18px;
    margin:2% 10% 2% 10%;
    text-align:left;
    font-family:Kotex;
   
`;


export const Data = styled.p`
    font-size:12px;
    font-family: Kotex;
    margin:2% 10% 2% 10%;
    text-align:left;
`;

export const SubTitle = styled.h5`
    font-family:Kotex;
    text-align:left;
    margin:2% 10% 2% 10%;
`

export const Hr = styled.hr`
display: block; 
color: #d3d3d3;
margin-before: 0.5em; 
margin-after: 0.5em; 
margin-start: auto; 
margin-end: auto; 
overflow: hidden; 
border-style: dotted; 
border-width: 0.5px;
`

export const Input = styled.input`
height: 30px;
width: 50%;
border-radius: 10px;
margin-top: 50px;
margin-bottom: 20px;
border: ridge;
`


export const Button = styled.button`
height: 50px;
width: 50px;
border-radius: 50%;
border: 0px;
background-image: linear-gradient(45deg, #ff00bb, #ea1b23);
cursor: pointer;
box-shadow: 2px 3px 3px 2px rgba(0, 0, 0, 0.1);
color: white;
`;

export const Img = styled.img`
    margin-right: 63%;
    margin-top: 15px;
    width: 70px;

    @media (min-width: 1024px) {
        margin-right: 75%;
    }
`