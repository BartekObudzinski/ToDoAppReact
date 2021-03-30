import React from "react";
import Button from "../Button/Button";
import Edit from "../Edit/Edit";
import styles from "./ToDoSingleTask.module.scss";
import AppContext from "../../Contexts/context";
const ToDoSingleTask = ({ handleEdit, todoTask, handleRemove, handleDone }) => {
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
    <AppContext.Consumer>
      {(edit) => (
        <div
          className={
            todoTask.completed ? styles.singleTaskDone : styles.singleTask
          }
        >
          {todoTask.id !== edit ? (
            <>
              <p>{todoTask.text}</p>

              <div className="buttonsContainer">
                {todoTask.completed ? null : (
                  <Button style={styles.buttonEdit} onClickFn={onEditClick}>
                    <i class="material-icons">mode_edit</i>
                  </Button>
                )}
                <Button style={styles.buttonDone} onClickFn={onDoneClick}>
                  <i class="material-icons">check</i>
                </Button>
                <Button style={styles.buttonDelete} onClickFn={onRemoveClick}>
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
      )}
    </AppContext.Consumer>
  );
};

export default ToDoSingleTask;
