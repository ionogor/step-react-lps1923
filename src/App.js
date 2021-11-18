import { useEffect, useState } from "react";
import Post from "./components/Post";

function App() {
  const [message, setMessage] = useState("");
  const [posts, setPosts] = useState([]);
  const [postId, setPostId] = useState(null);

  console.log("postId", postId);

  //// React Router -> Multi-Page SPA

  /// Cod Async:
  // Cereri la BD: Client -> API(Backend)-> BD(server)
  // functii de tip Timer: setInterval(), setTimeout()

  // useEffect() - Hook

  // useEffect(()=>{})
  // useEffect(()=>{},[arr de dependente])
  // useEffect(()=>{},[]) -> logica din useEffect se executa doar la incarcarea paginii

  //console.log("Hello World 1");

  const handleClick = () => {
    setMessage("Hello from LPS1923!!");
  };

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        setPosts(json);
      });
    //console.log("Hello World 2");
  }, []);

  //console.log("Hello World 3");

  // Falsy Values: false, 0, null, "", undefined, NaN

  return (
    <div className="App">
      <h1>{message}</h1>
      <button onClick={handleClick}>ClickMe</button>
      {!postId ? (
        posts.map((post) => {
          return (
            <div key={post.id}>
              <div key={post.id} style={{ marginBottom: "80px" }}>
                <p>
                  <strong> PostID:</strong>
                  {` ${post.id}`}
                </p>
                <p>
                  <strong> Title:</strong> {` ${post.title}`}
                </p>
                <p>
                  <strong> UserID:</strong>
                  {` ${post.userId}`}
                </p>
                <button onClick={() => setPostId(post.id)}>Show More</button>
              </div>
            </div>
          );
        })
      ) : (
        <Post postId={postId} setPostId={setPostId} />
      )}
    </div>
  );
}

export default App;
