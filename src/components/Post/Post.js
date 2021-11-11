import React from "react";
import "./Post.css";

const Post = (props) => {
  //<></> FRAGMENT
  return (
    <div className="posts-container-wrapper">
      <h1>Instagram</h1>
      {props.posts.map((post) => {
        return (
          <img src={post.imageUrl} alt="avatar" style={{ width: "550px" }} />
        );
      })}
    </div>
  );
};

export default Post;
