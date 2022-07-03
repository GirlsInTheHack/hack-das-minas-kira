import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  margin: 10px 50px;
`;

export const User = styled.div`
  margin: 2% 5%;
  display: flex;
  flex-direction: column;
  align-items: center;
  vertical-align: middle;
  min-height: 100%;
`;

export const Box = styled.div`
  border: 2px transparent;
  border-radius: 0 0 10px 0;
  box-shadow: -3px 6px 12px 0px rgba(0, 0, 0, 0.1);
  padding: 5px;
  min-width: 80%;
  min-height: 100%;
`;

export const Text = styled.p`
  text-align: center;
  vertical-align: middle;
  align-items: center;
`;
