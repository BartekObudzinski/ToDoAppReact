import React from "react";
import ToDoSingleTask from "./ToDoSingleTask";

const ToDoList = ({ todoTasks, setTodoTasks }) => {
  return (
    <div className="tasksList">
      {todoTasks.map((todoTask) => (
        <ToDoSingleTask
          todoTasks={todoTasks}
          setTodoTasks={setTodoTasks}
          key={todoTask.id}
          text={todoTask.text}
          todoTask={todoTask}
        />
      ))}
    </div>
  );
};

export default ToDoList;
