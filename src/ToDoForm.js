import { useState } from "react";

const ToDoForm = () => {
  const [todoValue, setTodoValue] = useState("");
  const [todoTasks, setTodoTasks] = useState([]);

  const addTask = (e) => {
    e.preventDefault();
    if (todoValue != "") {
      setTodoTasks([...todoTasks, todoValue]);
      console.log(...todoTasks);
      setTodoValue("");
    }
  };

  const handleRemove = (index) => {
    setTodoTasks((prevValue) => [
      ...prevValue.slice(0, index),
      ...prevValue.slice(index + 1, prevValue.length),
    ]);
  };

  /* const index = array.indexOf(5);
  if (index > -1) {
    array.splice(index, 1);
  }*/
  return (
    <div className="ToDoForm">
      <form className="dupa">
        <input
          value={todoValue}
          type="text"
          required
          placeholder="co dzis robisz"
          onChange={(e) => setTodoValue(e.target.value)}
        />
        <button type="submit" onClick={addTask}>
          Wyslij
        </button>
      </form>
      <div className="tasksList">
        {todoTasks.map((singleTask, index) => (
          <div className="singleTask">
            <p>{singleTask}</p>
            <button
              className="deleteButton"
              onClick={() => handleRemove(index)}
            >
              X
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ToDoForm;
/* const [todoValue, setTodoValue] = useState('')
   const [todoTasks, setTodoTasks] = useState([])

   const addTask = (e) => {
        e.preventDefault()

        if(todoValue != '') {
            setTodoTasks([...todoTasks, todoValue])
            console.log(todoValue)
            setTodoValue('')
            console.log(todoTasks, todoValue)
         
        }
   }

   const handleRemove = (e) =>{
        console.log(e.target.value)
   }*/
/*
<form>
                    <input 
                        value={todoValue}
                        type="text"
                        required
                        placeholder="co dzis robisz"
                        onChange={(e)=> setTodoValue(e.target.value)}
                    />
                    <button
                        type="submit"
                        onClick={addTask}
                    >
                    Wyslij
                    </button>
                </form>
                <p>
                {todoTasks.map(txt => 
                <p>{txt}
             
                <button onClick={((e)=>handleRemove(e.parentNode.value))}>X</button>
                </p>
               
                
                )}
                </p>
*/
