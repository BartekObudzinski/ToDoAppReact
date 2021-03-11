import React, { useState } from "react";
const ToDoForm = ({ input, setInput }) => {
  /*const [inputValue, setInputValue] = useState("");
  const [todoTasks, setTodoTasks] = useState([]);
  const [todoDoneTasks, setTodoDoneTasks] = useState([]);
   
  const addTask = (e) => {
    e.preventDefault();
    if (inputValue != "") {
      setTodoTasks([...todoTasks, inputValue]);
      setInputValue("");
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
*/
  /*const handleRemoveAll = () => {
    setTodoTasks([]);
    //  setTodoDoneTasks([]);
  };*/
  /* const handleEdit = (index, editValue) => {
    if (todoValue == "") {
      setTodoValue(todoTasks[index]);
    } else {
      const editTodos = [...todoTasks];
      editTodos[index] = editValue;
      setTodoTasks(editTodos);
      setTodoValue("");
    }
  };*/

  /* const isDoneTask =
    !todoDoneTasks.length == 0 ? <h2>Zrobione taski</h2> : <h2></h2>;
    */
  const taskId = Math.floor(Math.random() * 10000);

  const handleInputText = (e) => {
    console.log(e.target.value);
    console.log(taskId);
    setInput(e.target.value);
  };
  return (
    <div className="ToDoForm">
      <form className="dupa">
        <input
          value={input}
          type="text"
          required
          placeholder="co dzis robisz"
          onChange={handleInputText}
        />
        <div className="buttonsContainer">
          <button className="doneButton" type="submit">
            <i class="material-icons">send</i>
          </button>
          <button className="deleteButton">
            <i class="material-icons">clear_all</i>
          </button>
        </div>
      </form>
    </div>
  );
};

export default ToDoForm;
/* <div className="tasksList">
        {todoTasks.map((singleTask, index) => (
          <div className="singleTask">
            <p>{singleTask}</p>
            <div className="buttonsContainer">
               <button
                onClick={() => handleEdit(index, todoValue)}
                className="editButton"
              >
                <i class="material-icons">mode_edit</i>
              </button>
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
        {isDoneTask}
        {todoDoneTasks.map((todoDoneTask, index) => (
          <div className="singleDoneTask">
            <p>{todoDoneTask}</p>
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
    </div>*/
