import "./App.css";
import React from "react";
import InputTodo from "./components/Input";
import ListTodos from "./components/List";
//helllooooooooo

function App() {
  return (
    <>
      <div className="container">
        <InputTodo />
        <ListTodos />
      </div>
    </>
  );
}

export default App;

