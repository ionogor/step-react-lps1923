import React, { useEffect } from "react";
import { useState } from "react/cjs/react.development";

const Post = (props) => {
  const { postId, setPostId } = props;

  const [post, setPost] = useState({});

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
      .then((response) => response.json())
      .then((json) => setPost(json));
  }, [postId]);

  return (
    <div style={{ marginBottom: "80px" }}>
      <p>
        <strong> PostID:</strong>
        {` ${post.id}`}
      </p>
      <p>
        <strong> Title:</strong> {` ${post.title}`}
      </p>
      <p>
        <strong> Body:</strong> {` ${post.body}`}
      </p>
      <p>
        <strong> UserID:</strong>
        {` ${post.userId}`}
      </p>
      <button onClick={() => setPostId(null)}>Return</button>
    </div>
  );
};

export default Post;
// Users -> fetch la toti userii
// User -> fetch un singur user
