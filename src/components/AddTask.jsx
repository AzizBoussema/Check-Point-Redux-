import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../JS/actions/todoActions";

const AddTask = () => {
  const [description, setDescription] = useState("");
  const dispatch = useDispatch();

  const handleAdd = () => {
    const newTask = {
      id: Math.random(),
      description,
      isDone: false,
    };

    dispatch(addTask(newTask));
    setDescription("");
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Add task..."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      <button onClick={handleAdd}>Add</button>
    </div>
  );
};

export default AddTask;