import "./App.css";
import { useState } from "react";
import ToDoForm from "./components/ToDoForm/ToDoForm";
import ToDoList from "./components/ToDoList/ToDoList";
function App() {
  const [inputText, setInputText] = useState("");
  const [todoTasks, setTodoTasks] = useState([]);

  return (
    <div className="App">
      <ToDoForm
        inputText={inputText}
        setInputText={setInputText}
        todoTasks={todoTasks}
        setTodoTasks={setTodoTasks}
      />
      <ToDoList todoTasks={todoTasks} setTodoTasks={setTodoTasks} />
    </div>
  );
}

export default App;
