import { useDispatch } from "react-redux";
import { deleteTask, doneTask } from "../JS/actions/todoActions";

const Task = ({ task }) => {
  const dispatch = useDispatch();

  return (
    <div className="taskCard">
      <h3
        style={{
          textDecoration: task.isDone ? "line-through" : "none",
        }}
      >
        {task.description}
      </h3>

      <button onClick={() => dispatch(doneTask(task.id))}>
        Toggle Done
      </button>

      <button onClick={() => dispatch(deleteTask(task.id))}>
        Delete
      </button>
    </div>
  );
};

export default Task;