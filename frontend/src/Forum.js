import React from "react";

import YoutubeEmbed from "./components/YoutubeEmbed";
import Question from "./components/Question";
import Comment from "./components/Comment";



export default function Forum() {


  return (
    <div className="App">
      <h1>Youtube Embed</h1>
      <YoutubeEmbed embedId="CCM_lJuJSMA" />
     <Comment topicId="TODO-CONNECTION"/>
      <Question />
    </div>
  );
}
