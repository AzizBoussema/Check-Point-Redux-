import { useSelector } from "react-redux";
import { useState } from "react";
import Task from "./Task";

const ListTask = () => {

  const tasks = useSelector((state)=>state.todoReducer.tasks);

  const [filter,setFilter] = useState("all");

  const filteredTasks =
    filter === "done"
      ? tasks.filter(task => task.isDone)
      : filter === "undone"
      ? tasks.filter(task => !task.isDone)
      : tasks;

  return (

    <div>

      <div style={{marginTop:"20px"}}>

        <button className="filterBtn" onClick={()=>setFilter("all")}>
          All
        </button>

        <button className="filterBtn" onClick={()=>setFilter("done")}>
          Done
        </button>

        <button className="filterBtn" onClick={()=>setFilter("undone")}>
          Undone
        </button>

      </div>

      {filteredTasks.map(task => (
        <Task key={task.id} task={task}/>
      ))}

    </div>
  );
};

export default ListTask;