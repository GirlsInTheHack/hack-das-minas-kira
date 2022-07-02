import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  margin: auto;
`;

export const Button = styled.button`
  display: block;
  height: 50px;
  width: 50px;
  border-radius: 50%;
  border: 0px;
  background-image: linear-gradient(45deg, #ff00bb, #ea1b23);
  cursor: pointer;
  margin: auto;
  box-shadow: 0px 23px 14px 4px rgba(0, 0, 0, 0.1);
  color: white;
`;

export const Text = styled.p`
  margin: auto;
  text-align: center;
  color: #090808;
  text-size: 1.1rem;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;