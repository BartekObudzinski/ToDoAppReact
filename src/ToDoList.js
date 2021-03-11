import React from "react";
import ToDoSingleTask from "./ToDoSingleTask";

const ToDoList = ({ todoTasks }) => {
  return (
    <div className="tasksList">
      {todoTasks.map((todoTask) => (
        <ToDoSingleTask text={todoTask.text} />
      ))}
    </div>
  );
};

export default ToDoList;
