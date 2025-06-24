import "./App.css";
import { BlogPosts } from "./Components/BlogPosts/BlogPosts";
import { Footer } from "./Components/Footer/Footer";
import { Header } from "./Components/Header/Header";

function App() {
  return (
    <>
      <Header />
      <BlogPosts />
      <Footer />
    </>
  );
}

export default App;
