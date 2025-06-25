import React, { useState } from "react";
import "./App.css";

interface Todo {
  id: number;
  title: string;
}

const App: React.FC = () => {
  const [todosList, setTodosList] = useState<Todo[]>([
    {
      id: 0,
      title: "Clean room",
    },
    {
      id: 1,
      title: "Go to the gym",
    },
    {
      id: 2,
      title: "learn javascript",
    },
  ]);

  return (
    <div id="container" className="App">
      <h1>
        To-Do List
        <i className="fa fa-toggle-on" id="kopce" aria-hidden="true"></i>
      </h1>
      <input type="text" placeholder="Add New Todo" />
      <ul>
        <li className="el">
          <span className="trash">
            <i className="fa fa-trash"></i>
          </span>{" "}
          Todo 1
        </li>
      </ul>
    </div>
  );
};

export default App;
