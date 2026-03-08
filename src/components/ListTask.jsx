import { useSelector } from "react-redux";
import { useState } from "react";
import Task from "./Task";

const ListTask = () => {
  const tasks = useSelector((state) => state.todoReducer.tasks);

  const [filter, setFilter] = useState("all");

  const filteredTasks =
    filter === "done"
      ? tasks.filter((task) => task.isDone)
      : filter === "undone"
      ? tasks.filter((task) => !task.isDone)
      : tasks;

  return (
    <div>
      <button onClick={() => setFilter("all")}>All</button>
      <button onClick={() => setFilter("done")}>Done</button>
      <button onClick={() => setFilter("undone")}>Undone</button>

      {filteredTasks.map((task) => (
        <Task key={task.id} task={task} />
      ))}
    </div>
  );
};

export default ListTask;