import "./App.css";
import { useState, useEffect } from "react";
import ToDoForm from "./components/ToDoForm/ToDoForm";
import ToDoList from "./components/ToDoList/ToDoList";
import AppContext from "./Contexts/context";
function App() {
  const [inputText, setInputText] = useState("");
  const [todoTasks, setTodoTasks] = useState([]);
  const [edit, setEdit] = useState();
  const [date, setDate] = useState(new Date());
  useEffect(() => {
    {
      todoTasks.length < 1
        ? (document.title = `Aplikacja ToDo`)
        : (document.title = `Masz ${todoTasks.length} zadań`);
    }
  });
  return (
    <div className="App">
      <AppContext.Provider value={edit}>
        <ToDoForm
          inputText={inputText}
          setInputText={setInputText}
          todoTasks={todoTasks}
          setTodoTasks={setTodoTasks}
          date={date}
          setDate={setDate}
        />

        <ToDoList
          setEdit={setEdit}
          todoTasks={todoTasks}
          setTodoTasks={setTodoTasks}
          date={date}
        />
      </AppContext.Provider>
    </div>
  );
}

export default App;
