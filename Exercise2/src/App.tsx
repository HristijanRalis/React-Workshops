import React from "react";
import "./App.css";
import Header from "./components/Header";
function App() {
  return (
    <div className="App">
      <Header />
      <h2 className="title">Latest News</h2>
      <br />
      <h2 className="title">Forecast</h2>
      <br />
      <h2 className="title">Related News</h2>
    </div>
  );
}

export default App;
