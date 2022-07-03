import styled from "styled-components";

export const Container = styled.div`
  display: table;
  margin-left:10%
`;

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

export const Text = styled.div`
  margin-left:10%;
  text-align: center;
  color: #090808;
  text-size: 1.1rem;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  display: table-cell;
`;

export const Questionp = styled.h1`
  font-family: Kotex-Bold;
  font-size:18px;
  margin-bottom: 0px;
`;

export const Community = styled.span`
  font-family: Kotex;
  font-size:13px;
  padding:1px;
`;

export const DivButton = styled.div`
  display: table-cell;
  padding: 0px 20px;
  text-align: center;
`;