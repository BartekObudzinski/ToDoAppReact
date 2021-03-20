import React from "react";
import Button from "./Button";
import Edit from "./Edit";
const ToDoSingleTask = ({
  edit,
  handleEdit,
  todoTask,
  handleRemove,
  handleDone,
}) => {
  const onRemoveClick = () => {
    handleRemove(todoTask.id);
  };

  const onDoneClick = () => {
    handleDone(todoTask.id);
  };

  const onEditClick = () => {
    handleEdit(todoTask.id);
  };
  return (
    <div className={todoTask.completed ? "singleTaskDone" : "singleTask"}>
      {todoTask.id !== edit ? (
        <>
          <p>{todoTask.text}</p>
          <div className="buttonsContainer">
            <Button style="editButton" onClickFn={onEditClick}>
              <i class="material-icons">mode_edit</i>
            </Button>
            <Button style="doneButton" onClickFn={onDoneClick}>
              <i class="material-icons">check</i>
            </Button>
            <Button style="deleteButton" onClickFn={onRemoveClick}>
              <i class="material-icons">clear</i>
            </Button>
          </div>
        </>
      ) : (
        <Edit
          text={todoTask.text}
          todoTask={todoTask}
          key={todoTask.id}
          handleEditTask={handleEdit}
        />
      )}
    </div>
  );
};

export default ToDoSingleTask;
