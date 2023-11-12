import "./App.css";
import PostList from "./features/posts/PostList";
import AddPost from "./features/posts/AddPost";
function App() {
  return (
    <div className="App">
      <AddPost />
      <PostList />
    </div>
  );
}

export default App;
