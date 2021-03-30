import { v4 as taskId } from "uuid";
import Button from "../Button/Button";
import styles from "./ToDoForm.module.scss";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
const ToDoForm = ({
  startDate,
  setStartDate,
  inputText,
  setInputText,
  todoTasks,
  setTodoTasks,
}) => {
  const handleInputText = (e) => {
    setInputText(e.target.value);
  };

  const addTask = (e) => {
    e.preventDefault();
    if (inputText !== "") {
      setTodoTasks([
        ...todoTasks,
        { text: inputText, id: taskId(), completed: false, date: startDate },
      ]);
      setInputText("");
    }
    console.log(todoTasks);
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
      <DatePicker
        selected={startDate}
        onChange={(date) => setStartDate(date)}
        dateFormat="dd/MM/yyyy"
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
