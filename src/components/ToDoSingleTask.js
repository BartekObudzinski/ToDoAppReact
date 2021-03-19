import React from "react";
import Button from "./Button";

const ToDoSingleTask = ({
  isEdit,
  text,
  todoTasks,
  setTodoTasks,
  todoTask,
}) => {
  const handleRemove = () => {
    setTodoTasks(todoTasks.filter((el) => el.id !== todoTask.id));
  };
  const handleDone = () => {
    setTodoTasks(
      todoTasks.map((item) => {
        if (item.id === todoTask.id) {
          return {
            ...item,
            completed: !item.completed,
          };
        }
        return item;
      })
    );
  };

  return (
    <div className={todoTask.completed ? "singleTaskDone" : "singleTask"}>
      <p>{text}</p>
      <div className="buttonsContainer">
        {todoTask.completed ? null : (
          <Button style="editButton" onClickFn={isEdit}>
            <i class="material-icons">mode_edit</i>
          </Button>
        )}
        <Button style="doneButton" onClickFn={handleDone}>
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
