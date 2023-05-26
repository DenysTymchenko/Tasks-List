import { createSlice } from '@reduxjs/toolkit';
import { moduleName } from './constant';

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
    updateTask(state, { payload }) {
      const index = state.tasks.findIndex(task => task.id === payload.id);
      state.tasks[index] = payload;
      localStorage.setItem('tasks', JSON.stringify(state.tasks));
    },
    deleteTask(state, { payload }) {
      const index = state.tasks.findIndex(task => task.id === payload.id);
      state.tasks.splice(index, 1);
      localStorage.setItem('tasks', JSON.stringify(state.tasks));
    },
    setCompleted(state, { payload }) {
      const index = state.tasks.findIndex(element => element.id === payload.id);
      state.tasks[index].completed = !payload.completed;
      localStorage.setItem('tasks', JSON.stringify(state.tasks));
    }
  },
});

export default tasksSlice.reducer;
export const {
  getTasks,
  createTask,
  updateTask,
  deleteTask,
  setCompleted,
} = tasksSlice.actions;
