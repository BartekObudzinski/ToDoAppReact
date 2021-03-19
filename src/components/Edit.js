import React, { useState } from "react";
import Button from "./Button";

const Edit = ({ text, isEdit, todoTask }) => {
  const [editValue, setEditValue] = useState(text);

  const handleEdit = (e) => {
    setEditValue(e.target.value);
  };

  const handleChangeEdit = (e) => {
    e.preventDefault();
    todoTask.text = editValue;
    isEdit();
  };

  return (
    <>
      <input type="text" value={editValue} onChange={handleEdit} />
      <div className="buttonsContainer">
        <Button onClickFn={handleChangeEdit} style="editButton">
          <i class="material-icons">mode_edit</i>
        </Button>
      </div>
    </>
  );
};

export default Edit;
