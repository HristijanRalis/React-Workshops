import React from "react";
import "./App.css";
import Header from "./components/Header";
import Blog from "./components/Blog/Blog";
import Forecast from "./components/Forecast/Forecast";

function App() {
  return (
    <div className="App">
      <Header />
      <h2 className="title">Latest News</h2>
      <Blog section="Latest" />
      <br />
      <h2 className="title">Forecast</h2>
      <Forecast />
      <br />
      <h2 className="title">Related News</h2>
      <Blog section="Related" />
    </div>
  );
}

export default App;
