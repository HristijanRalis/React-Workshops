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
  // TUPLE - niza so tocbno opredelen broj na chlenovi
  const [inputVisible, setInputVisible] = useState(false);
  return (
    <div id="container" className="App">
      <h1>
        To-Do List
        <i
          className={`fas fa-toggle-${inputVisible ? "on" : "off"}`}
          id="kopce"
          aria-hidden="true"
          onClick={() => setInputVisible(!inputVisible)}
        ></i>
      </h1>
      {/* <input
        className={`${!inputVisible ?  "hideInput" : ""}`}
        type="text"
        placeholder="Add New Todo"
      /> */}
      {inputVisible ? <input type="text" placeholder="Add New Todo" /> : null}
      <ul>
        {todosList.map((todo) => {
          return (
            <li className="el" key={todo.id}>
              <span className="trash">
                <i className="fa fa-trash"></i>
              </span>{" "}
              {todo.title}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default App;
