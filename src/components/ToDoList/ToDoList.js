import React, { useContext } from "react";
import ToDoSingleTask from "../ToDoSingleTask/ToDoSingleTask";
import Button from "../Button/Button";
import styles from "./ToDoList.module.scss";

const ToDoList = ({ date, setEdit, todoTasks, setTodoTasks }) => {
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

  const handleRemoveAll = () => {
    //setTodoTasks([]);
    console.log(...todoTasks);
  };

  const doneCounter = todoTasks.filter((done) => done.completed === true);
  return (
    <div className="tasksList">
      {todoTasks.map(
        (todoTask) =>
          todoTask.date === date && (
            <ToDoSingleTask
              key={todoTask.id}
              todoTask={todoTask}
              handleRemove={handleRemove}
              handleDone={handleDone}
              handleEdit={handleEdit}
            />
          )
      )}

      {todoTasks.length <= 0 ? null : (
        <div className={styles.tasksInformation}>
          <p>
            Jest {todoTasks.length} zadan, {doneCounter.length} zrobionych,
            pozostało {todoTasks.length - doneCounter.length}
          </p>
          <Button onClickFn={handleRemoveAll} style={styles.buttonClear}>
            Clear all
          </Button>
        </div>
      )}
    </div>
  );
};

export default ToDoList;
