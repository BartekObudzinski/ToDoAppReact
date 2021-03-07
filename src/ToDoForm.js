import { useState } from "react";

const ToDoForm = () => {
  const [todoValue, setTodoValue] = useState("");
  const [todoTasks, setTodoTasks] = useState([]);
  const [todoDoneTasks, setTodoDoneTasks] = useState([]);

  const addTask = (e) => {
    e.preventDefault();
    if (todoValue != "") {
      setTodoTasks([...todoTasks, todoValue]);
      setTodoValue("");
    }
  };

  const handleRemove = (index) => {
    setTodoTasks((prevValue) => [
      ...prevValue.slice(0, index),
      ...prevValue.slice(index + 1, prevValue.length),
    ]);
  };

  const handleDone = (index) => {
    setTodoDoneTasks((done) => done.concat(todoTasks[index]));
  };

  const handleDoneRemove = (index) => {
    setTodoDoneTasks((prevValue) => [
      ...prevValue.slice(0, index),
      ...prevValue.slice(index + 1, prevValue.length),
    ]);
  };

  const handleRemoveAll = () => {
    setTodoTasks([]);
    setTodoDoneTasks([]);
  };

  return (
    <div className="ToDoForm">
      <form className="dupa">
        <input
          value={todoValue}
          type="text"
          required
          placeholder="co dzis robisz"
          onChange={(e) => setTodoValue(e.target.value)}
        />
        <div className="buttonsContainer">
          <button className="doneButton" type="submit" onClick={addTask}>
            <i class="material-icons">send</i>
          </button>
          <button className="deleteButton" onClick={handleRemoveAll}>
            <i class="material-icons">clear_all</i>
          </button>
        </div>
      </form>
      <div className="tasksList">
        {todoTasks.map((singleTask, index) => (
          <div className="singleTask">
            <p>{singleTask}</p>
            <div className="buttonsContainer">
              <button
                className="deleteButton"
                onClick={() => handleRemove(index)}
              >
                <i class="material-icons">clear</i>
              </button>
              <button
                className="doneButton"
                onClick={() => {
                  handleDone(index);
                  handleRemove(index);
                }}
              >
                <i class="material-icons">check</i>
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="tasksdone">
        <h2>Wykonane taski</h2>
        {todoDoneTasks.map((todoDoneTask, index) => (
          <div className="singleDoneTask">
            {todoDoneTask}
            <div className="buttonsContainer">
              <button
                className="deleteButton"
                onClick={() => handleDoneRemove(index)}
              >
                X
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ToDoForm;
