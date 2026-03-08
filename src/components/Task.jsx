import { useDispatch } from "react-redux";
import { deleteTask, doneTask, editTask } from "../JS/actions/todoActions";
import { useState } from "react";

const Task = ({task}) => {

  const dispatch = useDispatch();

  const [edit,setEdit] = useState(false);
  const [newDesc,setNewDesc] = useState(task.description);

  return (

    <div className="taskCard">

      {edit ? (

        <div>

          <input
            value={newDesc}
            onChange={(e)=>setNewDesc(e.target.value)}
          />

          <button
            className="editBtn"
            onClick={()=>{
              dispatch(editTask(task.id,newDesc));
              setEdit(false);
            }}
          >
            Save
          </button>

        </div>

      ) : (

        <div>

          <h3
            style={{
              textDecoration: task.isDone ? "line-through" : "none"
            }}
          >
            {task.description}
          </h3>

          <button
            className="doneBtn"
            onClick={()=>dispatch(doneTask(task.id))}
          >
            Done
          </button>

          <button
            className="editBtn"
            onClick={()=>setEdit(true)}
          >
            Edit
          </button>

          <button
            className="deleteBtn"
            onClick={()=>dispatch(deleteTask(task.id))}
          >
            Delete
          </button>

        </div>

      )}

    </div>
  );
};

export default Task;