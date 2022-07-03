import YoutubeEmbed from "../../components/YoutubeEmbed";
import { Video, Button, ButtonLeft, ButtonRight, TitleVideo, Data,Text, ButtonDiv, Alert } from "./styles";
import { BsFillBookmarkFill, BsFillShareFill } from "react-icons/bs";
import Question from "../../components/Question";

function Home() {
  return (
    <div className="App">
      <Video>
        <YoutubeEmbed embedId="H4J7XO-a9VE"></YoutubeEmbed>
      </Video>
      <TitleVideo>Corrimento antes da menstruação: Quando se preocupar?</TitleVideo>
      <Data>31 de janeiro de 2022</Data>
      <Text>
        Lorem ipsum quis sollicitudin aenean ornare amet est suspendisse luctus
        lobortis, ligula lorem elit habitant diam tristique vulputate praesent
        libero scelerisque, morbi erat scelerisque sagittis integer conubia
        sollicitudin condimentum habitasse.
      </Text>
      <ButtonDiv>
        <ButtonLeft>
            <Button>
              <BsFillShareFill />
              Compartilhar
            </Button>
        </ButtonLeft>
        <ButtonRight>
            <Button>
              <BsFillBookmarkFill /> Favoritar
            </Button>
        </ButtonRight>
        
      </ButtonDiv>
      <Question destino="forum"></Question>
      <Alert>O conteúdo oferecido pela Kira não substitui um consulta médica.</Alert>
    </div>
  );
}

export default Home;
