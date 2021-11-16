import React from "react";
import "./Comment.css";

const Comment = ({ comments }) => {
  return (
    <div className="comment">
      {comments.map((comment) => {
        return (
          <div key={comment.id}>
            <span className="user">{comment.username}</span>
            <span className="comment-text">{comment.text}</span>
          </div>
        );
      })}
    </div>
  );
};

export default Comment;
