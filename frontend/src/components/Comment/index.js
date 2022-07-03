import React from "react";
import { Container, CommentContainer, User } from "./style";
import { HiOutlineUserCircle } from "react-icons/hi";
import PropTypes from "prop-types";

const Comment = ({ user, comment }) => {
  return (
    <>
      <Container>
        <User>
          <HiOutlineUserCircle/>{user}
        </User>
        <CommentContainer>{comment}</CommentContainer>
      </Container>
    </>
  );
};

Comment.propTypes = {
  user: PropTypes.string,
  comment: PropTypes.string,
};

export default Comment;
