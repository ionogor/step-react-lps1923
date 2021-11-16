import Post from "./components/Post/Post";
import postsList from "./data";
import SearchBar from "./components/SearchBar/SearchBar";
import { useState } from "react";

function App() {
  //Html + Javascript => JSX - SINTAXA REACT
  //console.log("posts:", postsList);

  const [posts, setPosts] = useState(postsList);
  console.log("posts: ", posts);

  const filterPostsByUser = (query) => {
    const filtredPosts = posts.filter((post) => {
      return post.username.includes(query);
    });

    return setPosts(filtredPosts);
  };

  //props-> properties
  return (
    <div className="App">
      <SearchBar filterPostsByUser={filterPostsByUser} />
      <Post posts={posts} />
    </div>
  );
}

export default App;
