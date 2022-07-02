import React from "react";
import YoutubeEmbed from "./components/YoutubeEmbed";

export default function Artigo() {
  return (
    <div className="App">
      <h1>Youtube Embed</h1>
      <YoutubeEmbed embedId="CCM_lJuJSMA" />
    </div>
  );
}