const ToDoList = ({todoTasks}) => {
    return ( 
        <div className="todoList">
            {todoTasks.map( (task) => {
                <div className="singleTask" key={task.id}>
                    <p>{task.body}</p>
                    {console.log(task.id)}
                </div>
            })}

        </div>
     );
}
 
export default ToDoList;