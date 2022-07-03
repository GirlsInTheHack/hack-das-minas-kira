import React from "react";
import { Button, Container, Text } from "./style";
import { AiOutlineRight as Arrow } from "react-icons/ai";
import { IconContext } from "react-icons";

const Question = () => {
  return (
    <Container>
      <Text>
        <h3>Tem alguma dúvida?</h3>
        <p>Poste na nossa comunidade</p>
      </Text>
      <Button>
        <IconContext.Provider
          value={{
            color: "white",
            size: "15px"
          }}
        >
          <div>
            <Arrow />
            <Arrow />
          </div>
        </IconContext.Provider>
      </Button>
    </Container>
  );
};

export default Question;
