import React, { useState } from "react";
const ToDoForm = ({ input, setInput, todoTasks, setTodoTasks }) => {
  /*
  const handleDone = (index) => {
    setTodoDoneTasks((done) => done.concat(todoTasks[index]));
  };
*/

  const taskId = Math.floor(Math.random() * 10000);

  const handleInputText = (e) => {
    setInput(e.target.value);
  };

  const addTask = (e) => {
    e.preventDefault();
    if (input != "") {
      setTodoTasks([
        ...todoTasks,
        { text: input, id: taskId, completed: false },
      ]);
      console.log(todoTasks);
      setInput("");
    }
  };

  const handleRemoveAll = () => {
    console.log("usuwam cala liste");
    setTodoTasks([]);
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
          <button className="doneButton" type="submit" onClick={addTask}>
            <i class="material-icons">send</i>
          </button>
          <button className="deleteButton" onClick={handleRemoveAll}>
            <i class="material-icons">clear_all</i>
          </button>
        </div>
      </form>
    </div>
  );
};

export default ToDoForm;
