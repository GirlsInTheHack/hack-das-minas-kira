import YoutubeEmbed from "../../components/YoutubeEmbed";
import { Video, Button } from "./styles";
import { BsFillBookmarkFill, BsFillShareFill } from "react-icons/bs";

function Home() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Video>
        <YoutubeEmbed></YoutubeEmbed>
      </Video>
      <h3>Corrimento antes da menstruação: Quando se preocupar?</h3>
      <h8>31 de janeiro de 2022</h8>
      <h6>
        Lorem ipsum quis sollicitudin aenean ornare amet est suspendisse luctus
        lobortis, ligula lorem elit habitant diam tristique vulputate praesent
        libero scelerisque, morbi erat scelerisque sagittis integer conubia
        sollicitudin condimentum habitasse.
      </h6>
      <div>
        <Button>
          <BsFillShareFill />
          Compartilhar
        </Button>
        <Button>
          <BsFillBookmarkFill /> Favoritar
        </Button>
      </div>
    </div>
  );
}

export default Home;