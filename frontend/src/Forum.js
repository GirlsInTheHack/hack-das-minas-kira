import React from "react";
import YoutubeEmbed from "./components/YoutubeEmbed";
import Question from "./components/Question";
import Comment from "./components/Comment";

const comments = [
  {
    user: "Hanna",
    comment:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore.",
  },
  {
    user: "Hanna",
    comment:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore.",
  },
];

export default function Forum() {
  return (
    <div className="App">
      <h1>Youtube Embed</h1>
      <YoutubeEmbed embedId="CCM_lJuJSMA" />
      {comments.map(comment => <Comment user={comment.user} comment={comment.comment} />)}
      <Question />
    </div>
  );
}
