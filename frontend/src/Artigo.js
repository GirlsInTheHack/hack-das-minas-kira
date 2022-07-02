import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/Navbar";
import YoutubeEmbed from "./components/YoutubeEmbed";
import Question from './components/Question'
import Comment from './components/Comment'

export default function Artigo() {
  return (
    <div className="App">
      <Router>
      <Navbar/>
      </Router>
      <h1>Youtube Embed</h1>

      <YoutubeEmbed embedId="CCM_lJuJSMA" />
      <Comment user="Rafaela" comment={"IHDOAIHDOAIHSDOIH"}/>
      <Question />
    </div>
  );
}