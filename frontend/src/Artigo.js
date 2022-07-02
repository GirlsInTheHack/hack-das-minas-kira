import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/Navbar";
import YoutubeEmbed from "./components/YoutubeEmbed";

export default function Artigo() {
  return (
    <div className="App">
      <Router>
      <Navbar/>
      </Router>
      <h1>Youtube Embed</h1>
      <YoutubeEmbed embedId="CCM_lJuJSMA" />
    </div>
  );
}