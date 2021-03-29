import { useState } from "react";
import "./styles/app.scss";
import AddTodo from "./components/AddTodo";
import Todos from "./components/Todos";

function App() {
  //State
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: "Lorem Ipsum is simply dummy text.",
      date: "29.03.2021.",
      reminder: true,
    },
    {
      id: 2,
      text: "Lorem Ipsum is simply dummy text.",
      date: "02.04.2021.",
      reminder: false,
    },
  ]);

  //Handlers
  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const setReminder = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, reminder: !todo.reminder } : todo
      )
    );
  };

  const addTodo = (todo) => {
    setTodos([
      ...todos,
      {
        id: Math.floor(Math.random() * 10000) + 1,
        text: todo.text,
        date: todo.date,
        reminder: todo.reminder,
      },
    ]);
  };

  return (
    <div className="app">
      <div className="container">
        <h1>React Todo</h1>
        <AddTodo onAdd={addTodo} />
        <Todos
          todos={todos}
          onSetReminder={setReminder}
          onDelete={deleteTodo}
        />
      </div>
    </div>
  );
}

export default App;
