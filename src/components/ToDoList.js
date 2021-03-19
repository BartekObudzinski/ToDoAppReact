import React from "react";
import ToDoSingleTask from "./ToDoSingleTask";
import Edit from "./Edit";
const ToDoList = ({ edit, setEdit, todoTasks, setTodoTasks }) => {
  const isEdit = () => {
    setEdit(!edit);
    console.log(edit);
  };
  return (
    <div className="tasksList">
      {todoTasks.map((todoTask) => (
        <ToDoSingleTask
          todoTasks={todoTasks}
          setTodoTasks={setTodoTasks}
          key={todoTask.id}
          text={todoTask.text}
          todoTask={todoTask}
          edit={edit}
          setEdit={setEdit}
          isEdit={isEdit}
        />
      ))}
    </div>
  );
};

export default ToDoList;
