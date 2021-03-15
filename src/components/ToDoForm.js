import { v4 as taskId } from "uuid";
import Button from "./Button";
const ToDoForm = ({ inputText, setInputText, todoTasks, setTodoTasks }) => {
  const handleInputText = (e) => {
    setInputText(e.target.value);
  };

  const addTask = (e) => {
    e.preventDefault();
    if (inputText !== "") {
      setTodoTasks([
        ...todoTasks,
        { text: inputText, id: taskId(), completed: false },
      ]);

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
          <Button onClickFn={addTask} style="doneButton" type="submit">
            <i class="material-icons">send</i>
          </Button>
          <Button onClickFn={handleRemoveAll} style="deleteButton">
            <i class="material-icons">clear_all</i>
          </Button>
        </div>
      </form>
    </div>
  );
};

export default ToDoForm;
