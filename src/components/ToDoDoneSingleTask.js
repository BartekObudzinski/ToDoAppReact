import React from "react";
import Button from "./Button";
const ToDoDoneSingleTask = () => {
  return (
    <div className="singleDoneTask">
      <p>done task xd</p>
      <div className="buttonsContainer">
        <Button style="deleteButton">
          <i class="material-icons">clear</i>
        </Button>
      </div>
    </div>
  );
};

export default ToDoDoneSingleTask;
