const ToDoSingleTask = () => {
  return (
    <div className="singleTask">
      <p></p>
      <div className="buttonsContainer">
        <button className="editButton">
          <i class="material-icons">mode_edit</i>
        </button>
        <button className="doneButton">
          <i class="material-icons">check</i>
        </button>
        <button className="deleteButton">
          <i class="material-icons">clear</i>
        </button>
      </div>
    </div>
  );
};

export default ToDoSingleTask;
