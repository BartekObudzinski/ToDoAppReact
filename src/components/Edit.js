import React, { useState } from "react";
import Button from "./Button";

const Edit = ({ text, setTodoTasks, isEdit, todoTask }) => {
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
      <Button onClickFn={handleChangeEdit} style="editButton">
        {" "}
        xd
      </Button>
    </>
  );
};

export default Edit;
