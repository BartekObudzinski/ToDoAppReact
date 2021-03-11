import "./App.css";
import { useState } from "react";
import ToDoForm from "./ToDoForm";
import ToDoList from "./ToDoList";
function App() {
  const [input, setInput] = useState("");
  const [todoTasks, setTodoTasks] = useState([]);

  return (
    <div className="App">
      <ToDoForm input={input} setInput={setInput} />
    </div>
  );
}

export default App;
