import React from "react";
import { Button, Container, Text } from "./style";
import { AiOutlineRight as Arrow}  from 'react-icons/ai';



const Question = () => {
  return (
    <Container>
    <Text>
    <h3>Tem alguma dúvida?</h3>
    <p>Poste na nossa comunidade</p>
    </Text>
   <Button><Arrow/><Arrow/></Button>
   </Container>
  )
};

export default Question;
