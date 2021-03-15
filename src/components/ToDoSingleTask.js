import React from "react";
import Button from "./Button";

const ToDoSingleTask = ({ text, todoTasks, setTodoTasks, todoTask }) => {
  const handleRemove = () => {
    setTodoTasks(todoTasks.filter((el) => el.id !== todoTask.id));
  };

  return (
    <div className="singleTask">
      <p>{text}</p>
      <div className="buttonsContainer">
        <Button style="editButton">
          <i class="material-icons">mode_edit</i>
        </Button>
        <Button style="doneButton">
          <i class="material-icons">check</i>
        </Button>
        <Button style="deleteButton" onClickFn={handleRemove}>
          <i class="material-icons">clear</i>
        </Button>
      </div>
    </div>
  );
};

export default ToDoSingleTask;
