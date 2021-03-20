import React, { useState } from "react";
import Button from "./Button";

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
      <input type="text" value={editValue} onChange={handleEdit} />
      <div className="buttonsContainer">
        <Button onClickFn={handleChangeEdit} style="doneButton">
          <i class="material-icons">check</i>
        </Button>
      </div>
    </>
  );
};

export default Edit;
