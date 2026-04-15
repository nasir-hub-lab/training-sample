import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tasks: [],
  count: 0,
  sorted: "normal",
};

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTask: (state, action) => {
      if (!state.tasks.includes(action.payload)) {
        state.tasks.push(action.payload);
        state.count += 1;
      }
    },
    deleteTask: (state, action) => {
      state.tasks.splice(action.payload, 1);
      state.count -= 1;
    },
    setSorted: (state, action) => {
      state.sorted = action.payload;
    },
  },
});

export const { addTask, deleteTask, setSorted } = todoSlice.actions;
export default todoSlice.reducer;