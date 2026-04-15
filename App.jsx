import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Item from "./Item.jsx";
import Footer from "./Footer.jsx";
import SortedList from "./SortedList.jsx";
import { addTask, deleteTask, editTask, setSorted } from "./todoSlice";

function App() {
  const [task, setTask] = useState("");
  const dispatch = useDispatch();

  const { tasks, sorted } = useSelector((state) => state.todo);

  function handleAdd(e) {
    e.preventDefault();
    const normalizedTask = task.trim();
    if (!normalizedTask) return;

    dispatch(addTask(normalizedTask));
    setTask("");
  }

  function handleDelete(index) {
    dispatch(deleteTask(index));
  }

  function handleEdit(index, newTask) {
    dispatch(editTask({ index, newTask }));
  }

  function handleChange(e) {
    dispatch(setSorted(e.target.value));
  }

  let sortedTasks = [...tasks];

  if (sorted === "alphabatically") {
    sortedTasks.sort((a, b) => a.localeCompare(b));
  }

  if (sorted === "reverse") {
    sortedTasks.reverse();
  }

  return (
    <>
      <form onSubmit={handleAdd}>
        <h2>Todo App</h2>

        <input
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Enter task"
        />

        <button>Add</button>

        <SortedList sorted={sorted} handleChange={handleChange} />

        <ul>
          {sortedTasks.map((item, index) => (
            <Item
              key={item}
              item={item}
              index={index}
              handleDelete={handleDelete}
              handleEdit={handleEdit}
            />
          ))}
        </ul>

        <Footer />
      </form>
    </>
  );
}

export default App;