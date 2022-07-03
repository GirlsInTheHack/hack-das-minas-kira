import React from "react";
import { Button, Container, Text, Questionp, Community, DivButton } from "./style";
import { AiOutlineRight as Arrow } from "react-icons/ai";
import { IconContext } from "react-icons";
import { Link } from "react-router-dom";

const Question = ({destino}) => {
  return (
    <Container>
      <Text>
        <Questionp>Tem alguma dúvida?</Questionp>
        <Community>Poste na nossa comunidade!</Community>
      </Text>
      <DivButton>
        <Link to={destino}>
          <Button>
            <IconContext.Provider value={{color: "white", size: "15px"}}>
            <div>
              <Arrow />
              <Arrow />
            </div>
            </IconContext.Provider>
          </Button>
        </Link>
      </DivButton>
      
      
    </Container>
  );
};

export default Question;
