import React from "react";
import axios from "axios";
import { Container, Box, User, Text } from "./style";
import { HiOutlineUserCircle } from "react-icons/hi";
import PropTypes from "prop-types";

const baseURL = "http://localhost:8990/forum/topic/";

const Comment = ({ topicId }) => {
  const [topic, setcomments] = React.useState(null);

  React.useEffect(() => {
    axios.get(`${baseURL}${topicId}`).then((response) => {
      setcomments(response.data);
    });
  }, []);

  if (!topic) return null;
  console.log(topic)
  const comments = topic.comments;
  return (
    <>
      {comments.map((comment) => (
        <Container>
          <User>
            <HiOutlineUserCircle />
            {comment.userCreator.name}
          </User>
          <Box><Text>{comment.comment}</Text></Box>
        </Container>
      ))}
    </>
  );
};

Comment.propTypes = {
  topicId: PropTypes.string.isRequired
};

export default Comment;
