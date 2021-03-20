import React from "react";
import ToDoSingleTask from "./ToDoSingleTask";

const ToDoList = ({ edit, setEdit, todoTasks, setTodoTasks }) => {
  const handleRemove = (taskId) => {
    setTodoTasks(todoTasks.filter((task) => task.id !== taskId));
  };

  const handleDone = (taskId) => {
    setTodoTasks(
      todoTasks.map((item) => {
        if (item.id === taskId) {
          return {
            ...item,
            completed: !item.completed,
          };
        }
        return item;
      })
    );
  };

  const handleEdit = (taskId) => {
    setEdit(taskId);
  };
  return (
    <div className="tasksList">
      {todoTasks.map((todoTask) => (
        <ToDoSingleTask
          key={todoTask.id}
          todoTask={todoTask}
          edit={edit}
          setEdit={setEdit}
          handleRemove={handleRemove}
          handleDone={handleDone}
          handleEdit={handleEdit}
        />
      ))}
    </div>
  );
};

export default ToDoList;
