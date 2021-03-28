import { v4 as taskId } from "uuid";
import Button from "../Button/Button";
import styles from "./ToDoForm.module.scss";
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

  return (
    <form className={styles.wrapper}>
      <input
        value={inputText}
        type="text"
        required
        placeholder="What you gonna do today?"
        maxLength="30"
        onChange={handleInputText}
      />
      <div className="buttonsContainer">
        <Button onClickFn={addTask} style={styles.buttonSend} type="submit">
          <i class="material-icons">send</i>
        </Button>
      </div>
    </form>
  );
};

export default ToDoForm;
