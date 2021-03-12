import { v4 as taskId } from "uuid";

const ToDoForm = ({ inputText, setInputText, todoTasks, setTodoTasks }) => {
  const handleInputText = (e) => {
    setInputText(e.target.value);
  };

  const addTask = (e) => {
    e.preventDefault();
    if (inputText != "") {
      setTodoTasks([
        ...todoTasks,
        { text: inputText, id: taskId(), completed: false },
      ]);

      console.log(todoTasks);
      setInputText("");
    }
  };

  const handleRemoveAll = () => {
    setTodoTasks([]);
  };

  return (
    <div className="ToDoForm">
      <form className="ToDoFormContainer">
        <input
          value={inputText}
          type="text"
          required
          placeholder="co dzis robisz"
          onChange={handleInputText}
        />
        <div className="buttonsContainer">
          <button className="doneButton" type="submit" onClick={addTask}>
            <i class="material-icons">send</i>
          </button>
          <button className="deleteButton" onClick={handleRemoveAll}>
            <i class="material-icons">clear_all</i>
          </button>
        </div>
      </form>
    </div>
  );
};

export default ToDoForm;
