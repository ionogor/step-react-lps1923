import React from "react";
import Comment from "../Comment/Comment";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faComment } from "@fortawesome/free-regular-svg-icons";
import "./Post.css";

const Post = (props) => {
  //<></> FRAGMENT
  return (
    <div className="posts-container-wrapper">
      {/* <h1>Instagram</h1> */}
      {props.posts.map((post) => {
        return (
          <div key={post.id} className="post-border">
            <div className="post-header">
              <div className="post-thumb-wrapper">
                <img
                  className="post-thumb"
                  src={post.thumbnailUrl}
                  alt="avatar"
                />
              </div>
              <h2>{post.username}</h2>
            </div>

            <div className="post-image-wrapper">
              <img src={post.imageUrl} alt="avatar" className="post-image" />
            </div>

            <div className="like-section">
              <span className="like-number">{post.likes}</span>
              <span className="like-section-wrapper">
                <FontAwesomeIcon icon={faHeart} />
              </span>
              <span className="like-section-wrapper">
                <FontAwesomeIcon icon={faComment} />
              </span>
            </div>
            <Comment comments={post.comments} />
          </div>
        );
      })}
    </div>
  );
};

export default Post;
