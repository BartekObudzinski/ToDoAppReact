import React, { useState } from "react";
import Button from "./Button";

const Edit = ({ text }) => {
  const [editValue, setEditValue] = useState(text);

  const handleEdit = (e) => {
    setEditValue(e.target.value);
  };
  return <input type="text" value={editValue} onChange={handleEdit} />;
};

export default Edit;
