const ToDoSingleTask = ({ text, todoTasks, setTodoTasks, todoTask }) => {
  const handleRemove = () => {
    setTodoTasks(todoTasks.filter((el) => el.id !== todoTask.id));
  };

  return (
    <div className="singleTask">
      <p>{text}</p>
      <div className="buttonsContainer">
        <button className="editButton">
          <i class="material-icons">mode_edit</i>
        </button>
        <button className="doneButton">
          <i class="material-icons">check</i>
        </button>
        <button className="deleteButton" onClick={handleRemove}>
          <i class="material-icons">clear</i>
        </button>
      </div>
    </div>
  );
};

export default ToDoSingleTask;
