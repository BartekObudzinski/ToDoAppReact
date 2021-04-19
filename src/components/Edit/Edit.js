import React, { useState } from "react";
import Button from "../Button/Button";
import styles from "./Edit.module.scss";
const Edit = ({ text, handleEditTask, todoTask }) => {
  const [editValue, setEditValue] = useState(text);

  const handleEdit = (e) => {
    setEditValue(e.target.value);
  };

  const handleChangeEdit = (e) => {
    e.preventDefault();
    todoTask.text = editValue;
    handleEditTask();
  };

  return (
    <>
      <input
        className={styles.inputEdit}
        type="text"
        value={editValue}
        onChange={handleEdit}
      />
      <div className="buttonsContainer">
        <Button onClickFn={handleChangeEdit} style={styles.buttonSend}>
          <i class="material-icons">check</i>
        </Button>
      </div>
    </>
  );
};

export default Edit;
