import { createSlice } from '@reduxjs/toolkit';
import { moduleName } from './constant';

/* eslint-disable no-param-reassign */
const tasksSlice = createSlice({
  name: moduleName,
  initialState: {
    tasks: [],
  },
  reducers: {
    getTasks(state) {
      state.tasks = JSON.parse(localStorage.getItem('tasks'));
    },
    createTask(state, { payload }) {
      state.tasks.push(payload);
      localStorage.setItem('tasks', JSON.stringify(state.tasks));
    },
    deleteTask(state, task) {
      const index = state.tasks.indexOf(task);
      state.tasks.splice(index, 1);
      localStorage.setItem('tasks', JSON.stringify(state.tasks));
    },
  },
});

export default tasksSlice.reducer;
export const {
  getFavorites,
  addToFavorites,
  removeFromFavorites,
} = tasksSlice.actions;
