import Post from "./components/Post/Post";
import postsList from "./data";

function App() {
  //Html + Javascript => JSX - SINTAXA REACT
  console.log("posts:", postsList);

  //props-> properties
  return (
    <div className="App">
      <Post posts={postsList} />
    </div>
  );
}

export default App;
