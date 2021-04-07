import { v4 as taskId } from "uuid";
import Button from "../Button/Button";

import styles from "./ToDoForm.module.scss";
import "react-datepicker/dist/react-datepicker.css";
const ToDoForm = ({
  date,
  setDate,
  inputText,
  setInputText,
  todoTasks,
  setTodoTasks,
}) => {
  const handleInputText = (e) => {
    setInputText(e.target.value);
  };

  const handleDate = (e) => {
    setDate(e.target.value);
  };

  const addTask = (e) => {
    e.preventDefault();
    if (inputText) {
      setTodoTasks([
        ...todoTasks,
        {
          text: inputText,
          id: taskId(),
          completed: false,
          date: date,
        },
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
      <input required type="date" value={date} onChange={handleDate} />;
      <div className="buttonsContainer">
        <Button onClickFn={addTask} style={styles.buttonSend} type="submit">
          <i class="material-icons">send</i>
        </Button>
      </div>
    </form>
  );
};

export default ToDoForm;
