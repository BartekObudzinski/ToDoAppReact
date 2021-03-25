import "./App.css";
import { useState } from "react";
import ToDoForm from "./components/ToDoForm/ToDoForm";
import ToDoList from "./components/ToDoList/ToDoList";
import AppContext from "./Contexts/context";
function App() {
  const [inputText, setInputText] = useState("");
  const [todoTasks, setTodoTasks] = useState([]);
  const [edit, setEdit] = useState();
  return (
    <div className="App">
      <AppContext.Provider value={edit}>
        <ToDoForm
          inputText={inputText}
          setInputText={setInputText}
          todoTasks={todoTasks}
          setTodoTasks={setTodoTasks}
        />

        <ToDoList
          edit={edit}
          setEdit={setEdit}
          todoTasks={todoTasks}
          setTodoTasks={setTodoTasks}
        />
      </AppContext.Provider>
    </div>
  );
}

export default App;
