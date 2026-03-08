import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../JS/actions/todoActions";

const AddTask = () => {

  const [description, setDescription] = useState("");
  const dispatch = useDispatch();

  const handleAdd = () => {

    if(description === "") return;

    const newTask = {
      id: Date.now(),
      description,
      isDone: false
    };

    dispatch(addTask(newTask));
    setDescription("");
  };

  return (
    <div>

      <input
        type="text"
        placeholder="Add new task..."
        value={description}
        onChange={(e)=>setDescription(e.target.value)}
      />

      <button className="addBtn" onClick={handleAdd}>
        Add Task
      </button>

    </div>
  );
};

export default AddTask;