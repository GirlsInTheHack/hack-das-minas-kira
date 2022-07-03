import React from "react";
import axios from "axios";
import { Container, Box, User, Text } from "./style";
import { HiOutlineUserCircle } from "react-icons/hi";
import PropTypes from "prop-types";

const baseURL = "http://localhost:8990/comments/all";

const Comment = ({ topicId }) => {
  const [comments, setcomments] = React.useState(null);

  React.useEffect(() => {
    axios.get(`${baseURL}`).then((response) => {
      setcomments(response.data);
    });
  }, []);

  if (!comments) return null;
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
