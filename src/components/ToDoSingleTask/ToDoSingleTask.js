import React, { useState } from "react";
import Button from "../Button/Button";
import Edit from "../Edit/Edit";
import styles from "./ToDoSingleTask.module.scss";
import AppContext from "../../Contexts/context";
const ToDoSingleTask = ({ handleEdit, todoTask, handleRemove, handleDone }) => {
  const [hidden, setHidden] = useState(false);
  const onRemoveClick = () => {
    handleRemove(todoTask.id);
  };

  const onDoneClick = () => {
    handleDone(todoTask.id);
  };

  const onEditClick = () => {
    handleEdit(todoTask.id);
  };

  const toggleHidden = () => {
    setHidden(!hidden);
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
              {todoTask.text.length <= 20 ? (
                <p>{todoTask.text}</p>
              ) : hidden ? (
                <>
                  <p>{todoTask.text.slice(0, 20) + "..."}</p>

                  <Button onClickFn={toggleHidden}>Czytaj wiecej</Button>
                </>
              ) : (
                <>
                  <p>{todoTask.text}</p>
                  <Button onClickFn={toggleHidden}>schowaj</Button>
                </>
              )}

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
