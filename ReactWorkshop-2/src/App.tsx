import React, { useState } from "react";
import "./App.css";
import { title } from "process";

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

const App: React.FC = () => {
  const [todosList, setTodosList] = useState<Todo[]>([
    {
      id: 0,
      title: "Clean room",
      completed: false,
    },
    {
      id: 1,
      title: "Go to the gym",
      completed: false,
    },
    {
      id: 2,
      title: "learn javascript",
      completed: false,
    },
  ]);
  // TUPLE - niza so tocbno opredelen broj na chlenovi
  const [inputVisible, setInputVisible] = useState(false);
  const [inputValue, setInputValue] = useState("");

  const handleAddTodo = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      const newTodo: Todo = {
        id: new Date().valueOf(),
        title: inputValue,
        completed: false,
      };

      setTodosList([newTodo, ...todosList]);
      setInputValue("");
    }
  };
  const handleTodoCompleted = (todo: Todo) => {
    const updatedTodoList = todosList.map((prevTodo) => {
      if (todo.id === prevTodo.id) {
        return {
          id: prevTodo.id,
          title: prevTodo.title,
          completed: !prevTodo.completed,
        };
      }
      return prevTodo;
    });

    setTodosList(updatedTodoList);
  };

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
      {inputVisible ? (
        <input
          type="text"
          value={inputValue}
          placeholder="Add New Todo"
          onChange={(e) => {
            setInputValue(e.target.value);
          }}
          onKeyUp={handleAddTodo}
        />
      ) : null}
      <ul>
        {todosList.map((todo) => {
          return (
            <li
              className={`el ${todo.completed ? "completed" : ""}`}
              key={todo.id}
              onClick={() => {
                handleTodoCompleted(todo);
              }}
            >
              <span
                className="trash"
                onClick={(e) => {
                  e.stopPropagation();
                  const updatedTodoList = todosList.filter(
                    (delTodo) => delTodo.id !== todo.id
                  );
                  setTodosList(updatedTodoList);
                }}
              >
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
